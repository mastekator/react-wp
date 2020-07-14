//React
import React from "react";

//App
import Category from "./Category";

const Categories = ({categories}) => {

    return (
        <div className="row mt-5">
            {undefined !== categories && categories.length
                ? (categories.map(category => <Category key={category.id} category={category}/>))
                : ''}
        </div>
    )

}

export default Categories
