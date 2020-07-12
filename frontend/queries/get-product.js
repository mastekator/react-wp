import gql from "graphql-tag";

/**
 * GraphQL products query.
 */
const PRODUCTS_QUERY = gql`query {
	products(first: 20) {
        nodes {
          id
          productId
          slug
          description
          name
          ... on SimpleProduct{
            price
            id
          }
          ... on VariableProduct{
            price
            id
          }
          ... on ExternalProduct{
            price
            id
          }
          ... on GroupProduct{
             products{
                nodes{
                    id
                    ... on SimpleProduct {
                        price
                    }
                }
            }
          }
          image {
            uri
            title
            srcSet
            sourceUrl
          }
        }
      }					
}`;

export default PRODUCTS_QUERY;
