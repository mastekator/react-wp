//React
import React from "react";

//Application
import Layout from "../components/Layout";
import Category from "../components/Category";
import GET_CATEGORIES_QUERY from "../queries/get-categories";
import client from "../components/ApolloClient";

//Third-party
import {withRouter} from "next/router";

const CategoriesPage = (props) => {

    const {productCategories} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    {productCategories.length ? (
                        productCategories.map(productCategory => <Category key={productCategory.id}
                                                                           category={productCategory}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};

CategoriesPage.getInitialProps = async () => {
    const result = await client.query({query: GET_CATEGORIES_QUERY})

    return {
        productCategories: result.data.productCategories.nodes
    }
};

export default withRouter(CategoriesPage);
