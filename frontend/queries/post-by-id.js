import gql from "graphql-tag";

const POST_BY_ID_QUERY = gql` query Post($id: ID!) {
	post(id: $id, idType: DATABASE_ID) {
	  id
	  databaseId
	  title
	  slug
	  content
	}
  }
`;

export default POST_BY_ID_QUERY;
