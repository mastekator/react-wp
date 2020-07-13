//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import Product from "../components/Product";
import PRODUCT_BY_CATEGORY_ID from "../queries/product-by-category";

//Third-party
import {withRouter} from "next/router";

const CategoryPage = (props) => {

    const {categoryName, productsByCategory} = props

    return (
        <Layout>
            <div className="container">
                {categoryName ? <h3>{categoryName}</h3> : ''}
                <div className="row">
                    {undefined !== productsByCategory && productsByCategory.length ? (
                        productsByCategory.map(product => <Product key={product.node.id} product={product.node}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
}

CategoryPage.getInitialProps = async (context) => {
    const {query: {slug}} = context
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id;
    const result = await client.query({
        query: PRODUCT_BY_CATEGORY_ID,
        variables: {id}
    })

    return {
        categoryName: result.data.productCategory.name,
        productsByCategory: result.data.productCategory.products.edges
    }
};

export default withRouter(CategoryPage);