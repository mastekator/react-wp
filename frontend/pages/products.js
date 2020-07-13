//React
import React from "react";

//Application
import Layout from "../components/Layout";
import Product from "../components/Product";
import client from "../components/ApolloClient";
import PRODUCTS_QUERY from "../queries/get-products";

//Third-party
import {withRouter} from "next/router";

const ProductsPage = (props) => {

    const {products} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    {undefined !== products && products.length ? (
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
