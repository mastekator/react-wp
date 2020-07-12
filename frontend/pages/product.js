//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";

//Third-party
import {withRouter} from "next/router";
import gql from "graphql-tag"

const PRODUCT_QUERY = gql`query($id: ID !){
    product(id: $id, idType: DATABASE_ID){
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
}`

const ProductPage = props => {

    const {product} = props;
    console.log(product)
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        {product.image
                            ? <img src={product.image.uri}
                                   alt={product.image.title}/>
                            : <img src='/images/products/product-1.jpg'
                                   alt="Product image"/>
                        }
                    </div>
                    <div className="col-lg-8">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

ProductPage.getInitialProps = async (context) => {
    let {query: {slug}} = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id

    const result = await client.query({
        query: PRODUCT_QUERY,
        variables: {id}
    })

    return {
        product: result.data.product
    }
};

export default withRouter(ProductPage);
