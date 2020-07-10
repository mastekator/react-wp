//React
import React, {useState, useContext} from "react";

//App
import {AppContext} from "../context/AppContext";
import {addFirstProduct, updateCart} from "../../functions";

//Third-party
import Link from "next/link";

const AddToCartButton = props => {

    const {product} = props;
    const [cart, setCart] = useContext(AppContext)
    const [showViewCart, setShowViewCart] = useState(false)

    const handleAddToCartClick = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('react-wp-cart')

            if (existingCart) {
                existingCart = JSON.parse(existingCart);
                const qtyToBeAdded = 1;
                const updatedCart = updateCart(existingCart, product, qtyToBeAdded)
                setCart(updatedCart)
            } else {
                const newCart = addFirstProduct(product);
                setCart(newCart)
            }

            setShowViewCart(true)
        }
    }

    return (
        <React.Fragment>
            <button onClick={handleAddToCartClick} className='btn btn-secondary'>
                Добавить в корзину
            </button>
            {showViewCart
                ? <Link href="/cart">
                    <button className="btn btn-secondary ml-3">В корзину</button>
                </Link>
                : ''
            }
        </React.Fragment>
    )
}

export default AddToCartButton;