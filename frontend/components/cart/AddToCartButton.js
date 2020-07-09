//React
import React, {useState, useContext} from "react";

//App
import {AppContext} from "../context/AppContext";
import {addFirstProduct} from "../../functions";

//Third-party
import Link from "next/link";

const AddToCartButton = props => {

    const {product} = props;
    const [cart, setCart] = useContext(AppContext)

    const handleAddToCartClick = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('react-wp-cart')

            if (existingCart) {

            } else {

                const newCart = addFirstProduct(product);
                setCart(newCart)
            }
        }
    }

    return (
        <React.Fragment>
            <button onClick={handleAddToCartClick} className='btn btn-secondary'>
                Добавить в корзину
            </button>
        </React.Fragment>
    )
}

export default AddToCartButton;