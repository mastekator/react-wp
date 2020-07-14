//React
import React from "react";

//App
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import POST_BY_CATEGORY_ID from "../queries/post-by-category";
import Post from "../components/posts/Post";

//Third-party
import {withRouter} from "next/router";

const PostPage = props => {

    const {categoryName, postsByCategory} = props;
    return (
        <Layout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <h1>{categoryName}</h1>
                        <div className="row mt-5">
                            {undefined !== postsByCategory && postsByCategory.length
                                ? (postsByCategory.map(post => <Post key={post.node.id} post={post.node}/>))
                                : ''}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

PostPage.getInitialProps = async (context) => {
    let {query: {slug}} = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.id
    const result = await client.query({
        query: POST_BY_CATEGORY_ID,
        variables: {id}
    })

    return {
        categoryName: result.data.category.name,
        postsByCategory: result.data.category.posts.edges
    }
};

export default withRouter(PostPage);
