//React
import React from "react";

//Application
import Layout from "../components/Layout";
import GET_POST_CATEGORIES_QUERY from "../queries/get-posts-categories";
import client from "../components/ApolloClient";

//Third-party
import {withRouter} from "next/router";
import Categories from "../components/posts/Categories";

const postCategoriesPage = (props) => {

    const {postCategories} = props;

    return (
        <Layout>
            <div className="container">
                <Categories categories={postCategories}/>
            </div>
        </Layout>
    )
};

postCategoriesPage.getInitialProps = async () => {
    const result = await client.query({query: GET_POST_CATEGORIES_QUERY})

    return {
        postCategories: result.data.categories.nodes
    }
};

export default withRouter(postCategoriesPage);
