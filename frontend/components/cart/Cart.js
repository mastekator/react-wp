//React
import React, {useContext} from "react";

//App
import {AppContext} from "../context/AppContext";
import CartItem from "./CartItem";
import {removeItemFromCart} from "../../functions";

//Third-party
import Link from "next/link";

const Cart = () => {

    const [cart, setCart] = useContext(AppContext);
    const handleRemoveProductClick = (e, productId) => {
        const updatedCart = removeItemFromCart(productId)

        setCart(updatedCart)
    }

    return (
        <div>
            {cart
                ? <div className="react-wp-cart container">
                    <h1 className="react-wp-cart__heading">Корзина</h1>
                    <table className="table table-hover">
                        <thead>
                        <tr className="react-wp-cart__header">
                            <th className="react-wp-cart__heading" scope="col"/>
                            <th className="react-wp-cart__heading" scope="col"/>
                            <th className="react-wp-cart__heading" scope="col">Товар</th>
                            <th className="react-wp-cart__heading" scope="col">Цена</th>
                            <th className="react-wp-cart__heading" scope="col">Кол-во</th>
                            <th className="react-wp-cart__heading" scope="col">Общая</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.products.length && (
                            cart.products.map(item => (
                                <CartItem
                                    key={item.productId}
                                    item={item}
                                    handleRemoveProductClick={handleRemoveProductClick}
                                    setCart={setCart}
                                />
                            ))
                        )}
                        </tbody>
                    </table>

                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <h2>Итого</h2>
                            <table className="table table-hover">
                                <tbody>
                                <tr className="table-light">
                                    <td className="react-wp-cart-element__total">Подытог</td>
                                    <td className="react-wp-cart-element__amt">{cart.totalProductsPrice}</td>
                                </tr>
                                <tr className="table-light">
                                    <td className="react-wp-cart-element__total">Итог</td>
                                    <td className="react-wp-cart-element__amt">{cart.totalProductsPrice}</td>
                                </tr>
                                </tbody>
                            </table>

                            <Link href='/checkout'>
                                <button className="btn btn-secondary">
                                    Оформить заказ
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}

export default Cart;