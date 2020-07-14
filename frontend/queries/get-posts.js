import gql from "graphql-tag";

/**
 * GraphQL posts query.
 */
const POSTS_QUERY = gql`query {
posts(first: 20) {
    nodes {
      title
      content
      id
      slug
      link
      databaseId
    }
  }			
}`;

export default POSTS_QUERY;
