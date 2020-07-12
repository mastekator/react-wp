import gql from "graphql-tag";

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES_QUERY = gql`query {
	productCategories(first: 10) {
      nodes {
        id
        databaseId
        link
        name
        slug
        image {
            srcSet
            title
            sourceUrl
        }
      }
    }
}`;

export default GET_CATEGORIES_QUERY;
