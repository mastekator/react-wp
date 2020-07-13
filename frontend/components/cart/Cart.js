//React
import React, {useContext, useState} from 'react'

//App
import Link from 'next/link';
import {AppContext} from "../context/AppContext";
import CartItem from "./CartItem";
import UPDATE_CART from "../../mutations/update-cart";
import GET_CART from "../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../mutations/clear-cart";

//Third-party
import {getFormattedCart, getUpdatedItems} from '../../functions';
import {v4} from 'uuid';
import {useMutation, useQuery} from "@apollo/react-hooks";


const Cart = () => {

    const [cart, setCart] = useContext(AppContext);
    const [requestError, setRequestError] = useState(null);

    // Get Cart Data.
    const {loading, error, data, refetch} = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {

            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

            // Update cart data in React Context.
            setCart(updatedCart);
        }
    });

    // Update Cart Mutation.
    const [updateCart, {data: updateCartResponse, loading: updateCartProcessing, error: updateCartError}] = useMutation(UPDATE_CART, {
        onCompleted: () => {
            refetch();
        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);
            }
        }
    });

    // Update Cart Mutation.
    const [clearCart, {data: clearCartRes, loading: clearCartProcessing, error: clearCartError}] = useMutation(CLEAR_CART_MUTATION, {
        onCompleted: () => {
            refetch();
        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);
            }
        }
    });

    /*
     * Handle remove product click.
     *
     * @param {Object} event event
     * @param {Integer} Product Id.
     *
     * @return {void}
     */
    const handleRemoveProductClick = (event, cartKey, products) => {

        event.stopPropagation();
        if (products.length) {

            // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
            const newQty = 0;
            const updatedItems = getUpdatedItems(products, newQty, cartKey);

            updateCart({
                variables: {
                    input: {
                        clientMutationId: v4(),
                        items: updatedItems
                    }
                },
            });
        }
    };

    // Clear the entire cart.
    const handleClearCart = (event) => {

        event.stopPropagation();

        if (clearCartProcessing) {
            return;
        }

        clearCart({
            variables: {
                input: {
                    clientMutationId: v4(),
                    all: true
                }
            },
        });
    }

    return (
        <div className="content-wrap-cart">
            {cart ? (
                <div className="woo-next-cart-wrapper container">
                    <h1 className="woo-next-cart-heading mt-5">Cart</h1>
                    <table className="table table-hover">
                        <thead>
                        <tr className="woo-next-cart-head-container">
                            <th className="woo-next-cart-heading-el" scope="col"/>
                            <th className="woo-next-cart-heading-el" scope="col"/>
                            <th className="woo-next-cart-heading-el" scope="col">Товар</th>
                            <th className="woo-next-cart-heading-el" scope="col">Стоимость</th>
                            <th className="woo-next-cart-heading-el" scope="col">Кол-во</th>
                            <th className="woo-next-cart-heading-el" scope="col">Итог</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.products.length && (
                            cart.products.map(item => (
                                <CartItem
                                    key={item.productId}
                                    item={item}
                                    updateCartProcessing={updateCartProcessing}
                                    products={cart.products}
                                    handleRemoveProductClick={handleRemoveProductClick}
                                    updateCart={updateCart}
                                />
                            ))
                        )}
                        </tbody>
                    </table>

                    {/*Clear entire cart*/}
                    <div className="clear-cart">
                        <button className="btn btn-secondary " onClick={(event) => handleClearCart(event)}
                                disabled={clearCartProcessing}>
                            <span className="woo-next-cart">Очистить корзину</span>
                            <i className="fa fa-arrow-alt-right"/>
                        </button>
                        {clearCartProcessing ? <p>Очищаем...</p> : ''}
                    </div>

                    {/* Display Errors if any */}
                    {requestError ? <div className="row woo-next-cart-total-container mt-5"> {requestError} </div> : ''}

                    {/*Cart Total*/}
                    <div className="row woo-next-cart-total-container mt-5">
                        <div className="col-6">
                            <h2>Итого</h2>
                            <table className="table table-hover">
                                <tbody>
                                <tr className="table-light">
                                    <td className="woo-next-cart-element-total">Подытог</td>
                                    <td className="woo-next-cart-element-amt">{('string' !== typeof cart.totalProductsPrice) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}</td>
                                </tr>
                                <tr className="table-light">
                                    <td className="woo-next-cart-element-total">Итог</td>
                                    <td className="woo-next-cart-element-amt">{('string' !== typeof cart.totalProductsPrice) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}</td>
                                </tr>
                                </tbody>
                            </table>
                            <Link href="/checkout">
                                <button className="btn btn-secondary woo-next-large-black-btn">
                                    <span className="woo-next-cart-checkout-txt">Оформить заказ</span>
                                    <i className="fas fa-long-arrow-alt-right"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mt-5">
                    <h2>В корзине пусто</h2>
                    <Link href="/">
                        <button className="btn btn-secondary woo-next-large-black-btn">
                            <span className="woo-next-cart-checkout-txt">Добавить новый товар</span>
                            <i className="fas fa-long-arrow-alt-right"/>
                        </button>
                    </Link>
                </div>
            )}
        </div>

    );
};

export default Cart;
