//React
import React from "react";

//Application
import Layout from "../components/Layout";
import Category from "../components/Category";
import client from "../components/ApolloClient";

//Third-party
import gql from 'graphql-tag'
import {withRouter} from "next/router";

const PRODUCT_CATEGORIES_QUERY = gql`query{
     productCategories(first: 10) {
      nodes {
        id
        databaseId
        link
        name
        slug
        image {
            srcSet
            title
            sourceUrl
        }
      }
    }
}`

const CategoriesPage = (props) => {

    const {productCategories} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    {productCategories.length ? (
                        productCategories.map(productCategory => <Category key={productCategory.id} category={productCategory}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};

CategoriesPage.getInitialProps = async () => {
    const result = await client.query({query: PRODUCT_CATEGORIES_QUERY})

    return {
        productCategories: result.data.productCategories.nodes
    }
};

export default withRouter(CategoriesPage);
