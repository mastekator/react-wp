//React
import React from "react";

//Application
import Layout from "../components/Layout";
import Category from "../components/Category";
import client from "../components/ApolloClient";

//Third-party
import gql from 'graphql-tag'
import {withRouter} from "next/router";


const CATEGORIES_QUERY = gql`query{
     categories(first: 10) {
      nodes {
        name
        link
        id
        slug
      }
    }
}`

const CategoriesPage = (props) => {

    const {categories} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    {categories.length ? (
                        categories.map(category => <Category key={category.id} category={category}/>)
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};

CategoriesPage.getInitialProps = async () => {
    const result = await client.query({query: CATEGORIES_QUERY})

    return {
        categories: result.data.categories.nodes
    }
};

export default withRouter(CategoriesPage);
