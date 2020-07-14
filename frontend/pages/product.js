//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import PRODUCT_BY_ID_QUERY from "../queries/product-by-id";

//Third-party
import {withRouter} from "next/router";

const ProductPage = props => {

    const {product} = props;
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
                        <div>{product.description}</div>
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
        query: PRODUCT_BY_ID_QUERY,
        variables: {id}
    })

    return {
        product: result.data.product
    }
};

export default withRouter(ProductPage);
