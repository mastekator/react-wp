//React
import React, {Fragment} from 'react';

//App
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ({cart}) => {

    return (
        <Fragment>
            {cart ? (
                <Fragment>
                    {/*Product Listing*/}
                    <table className="table table-hover">
                        <thead>
                        <tr className="woo-next-cart-head-container">
                            <th className="woo-next-cart-heading-el" scope="col"/>
                            <th className="woo-next-cart-heading-el" scope="col">Товар</th>
                            <th className="woo-next-cart-heading-el" scope="col">Итог</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.products.length && (
                            cart.products.map(item => (
                                <CheckoutCartItem key={item.productId} item={item}/>
                            ))
                        )}
                        {/*Total*/}
                        <tr className="">
                            <td className=""/>
                            <td className="woo-next-checkout-total">Подытог</td>
                            <td className="woo-next-checkout-total">{cart.totalProductsPrice}</td>
                        </tr>
                        <tr className="">
                            <td className=""/>
                            <td className="woo-next-checkout-total">Итого</td>
                            <td className="woo-next-checkout-total">{cart.totalProductsPrice}</td>
                        </tr>
                        </tbody>
                    </table>
                </Fragment>
            ) : ''}
        </Fragment>
    )
};

export default YourOrder;
