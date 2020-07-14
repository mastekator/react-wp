//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import POST_BY_ID_QUERY from "../queries/post-by-id";

//Third-party
import {withRouter} from "next/router";

const PostPage = props => {

    const {post} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <h1>{post.title}</h1>
                        <div>{post.content}</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

PostPage.getInitialProps = async (context) => {
    let {query: {slug}} = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id

    const result = await client.query({
        query: POST_BY_ID_QUERY,
        variables: {id}
    })

    return {
        post: result.data.post
    }
};

export default withRouter(PostPage);
