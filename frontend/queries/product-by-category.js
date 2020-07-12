import gql from "graphql-tag";

const PRODUCT_BY_CATEGORY_ID = gql`query($id: ID !){
     productCategory(id: $id, idType: DATABASE_ID) {
        id
        databaseId
        link
        name
        slug
        products {
            edges{
                node{
                    id
                    productId
                    slug
                    description
                    image {
                        uri
                        title
                        srcSet
                        sourceUrl
                    }
                    ... on SimpleProduct{
                         price
                     }
                    ... on VariableProduct{
                         price
                    }
                }
            }
        }
        image {
            srcSet
            title
            sourceUrl
        }
      }
}`

export default PRODUCT_BY_CATEGORY_ID;
