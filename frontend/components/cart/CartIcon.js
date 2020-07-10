//React
import React, {useContext} from "react";

//App
import {AppContext} from "../context/AppContext";

//Third-party
import Link from "next/link";

const CartIcon = () => {

    const [cart, setCart] = useContext(AppContext);
    const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    return (
        <React.Fragment>
            <Link href="/cart">
                <a>
                    <div className="cart-wrap">
                        {totalPrice ? <span>{totalPrice}</span> : ''}
                        <span className="cart-icon-container">
                            |
                            {productsCount ? <span className='cart-count'>{productsCount}</span> : ''}
                        </span>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
}

export default CartIcon;