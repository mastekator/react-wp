//App
import clientConfig from "../client-config";
import introspectionQueryResultData from '../fragmentTypes'

//Third-party
import fetch from "node-fetch";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createHttpLink} from "apollo-link-http";
import {ApolloLink} from "apollo-link";
import {IntrospectionFragmentMatcher} from "apollo-cache-inmemory";

// Fragment matcher.
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
});

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */
    const session = (process.browser) ? localStorage.getItem("woo-session") : null;
    const token = (process.browser) ? localStorage.getItem('token') : null
    if (session) {
        operation.setContext(({headers = {}}) => ({
            headers: {
                "woocommerce-session": `Session ${session}`,
                authorization: token ? `Bearer ${token}` : ''
            }
        }));
    }

    return forward(operation);

});

/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {

    return forward(operation).map(response => {
        /**
         * Check for session header and update session in local storage accordingly.
         */
        const context = operation.getContext();
        const {response: {headers}} = context;
        const session = headers.get("woocommerce-session");

        if (session) {

            // Remove session data if session destroyed.
            if ("false" === session) {

                localStorage.removeItem("woo-session");

                // Update session new data if changed.
            } else if (localStorage.getItem("woo-session") !== session) {

                localStorage.setItem("woo-session", headers.get("woocommerce-session"));

            }
        }

        return response;

    });
});

// Apollo GraphQL client.
const client = new ApolloClient({
    link: middleware.concat(afterware.concat(createHttpLink({
        uri: clientConfig.graphqlUrl,
        fetch: fetch
    }))),
    cache: new InMemoryCache({fragmentMatcher}),
});

export default client;