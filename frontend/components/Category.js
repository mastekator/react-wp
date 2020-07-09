import React from "react";

const Category = (props) => {

    const {category} = props;
    console.log(category)
    return (
        <div className="col-lg-4">
            <div className="card mb-3">
                <h3 className="card-header text-center">{category.name}</h3>
            </div>
        </div>
    );
}

export default Category;
