//React
import React from "react";

//App
import Post from "./Post";

const Posts = ({posts}) => {

    return (
        <div className="row mt-5">
            {undefined !== posts && posts.length
                ? (posts.map(post => <Post key={post.id} post={post}/>))
                : ''}
        </div>
    )

}

export default Posts
