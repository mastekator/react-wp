//React
import React from "react";

//Third-party
import Link from "next/link";

const Category = (props) => {

    const {category} = props;
    return (
        <div className="col-lg-4">
            <div className="card mb-3">
                <h3 className="card-header text-center">{category.name}</h3>
                <Link as={`/category/${category.slug}-${category.databaseId}`}
                      href={`/category/${category.slug}-${category.databaseId}`}>
                    <a>
                        Перейти
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Category;
