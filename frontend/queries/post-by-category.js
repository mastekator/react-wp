import gql from "graphql-tag";

const POST_BY_CATEGORY_ID = gql`query($id: ID !){
 category(id: $id, idType: DATABASE_ID) {
    databaseId
    id
    name
    slug
    posts {
      edges {
        node {
          id
          content(format: RENDERED)
          databaseId
          date
          title
          slug
        }
      }
    }
  }
}`

export default POST_BY_CATEGORY_ID;
