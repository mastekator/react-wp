import gql from "graphql-tag";

/**
 * GraphQL products query.
 */
const PAYMENT_METHODS_QUERY = gql`query {
paymentGateways {
    nodes {
      title
      id
      icon
      description
    }
  }			
}`;

export default PAYMENT_METHODS_QUERY;
