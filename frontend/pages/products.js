//React
import React from "react";

//Application
import Layout from "../components/Layout";
import Product from "../components/Product";
import client from "../components/ApolloClient";

//Third-party
import gql from 'graphql-tag'
import {withRouter} from "next/router";

const PRODUCTS_QUERY = gql`query{
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
}`

const ProductsPage = (props) => {

    const {products} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    {products.length ? (
                        products.map(product => <Product key={product.id} product={product}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};

ProductsPage.getInitialProps = async () => {
    const result = await client.query({query: PRODUCTS_QUERY})

    return {
        products: result.data.products.nodes
    }
};

export default withRouter(ProductsPage);
