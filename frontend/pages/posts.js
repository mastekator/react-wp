//React
import React from "react";

//Application
import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import POSTS_QUERY from "../queries/get-posts";
import Posts from "../components/posts/Posts";

//Third-party
import {withRouter} from "next/router";

const PostsPage = (props) => {

    const {posts} = props;

    return (
        <Layout>
            <div className="container">
                <Posts posts={posts}/>
            </div>
        </Layout>
    )
};

PostsPage.getInitialProps = async () => {
    const result = await client.query({query: POSTS_QUERY})

    return {
        posts: result.data.posts.nodes
    }
};

export default withRouter(PostsPage);
