//React
import React from "react";

//Third-party
import Link from "next/link";

const Post = ({post}) => {
    return (
        <div className="col-lg-4">
            <div className="card mb-3">
                <Link as={`/post?slug=${post.slug}-${post.databaseId}`}
                      href={`/post?slug=${post.slug}-${post.databaseId}`}>
                    <a>
                        <h3 className="card-header text-center">{post.title}</h3>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Post