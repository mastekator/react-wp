//React
import React from "react";

//Third-party
import Link from "next/link";

const Category = ({category}) => {
    return (
        <div className="col-lg-4">
            <div className="card mb-3">
                <Link as={`/post-category?slug=${category.slug}-${category.databaseId}`}
                      href={`/post-category?slug=${category.slug}-${category.databaseId}`}>
                    <a>
                        <h3 className="card-header text-center">{category.name}</h3>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Category