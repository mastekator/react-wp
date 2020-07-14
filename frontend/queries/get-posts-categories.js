import gql from "graphql-tag";

/**
 * GraphQL post categories query.
 */
const GET_POST_CATEGORIES_QUERY = gql`query {
categories(first: 10) {
    nodes {
      databaseId
      id
      name
      slug
    }
  }
}`;

export default GET_POST_CATEGORIES_QUERY;
