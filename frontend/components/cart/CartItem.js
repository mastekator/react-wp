//React
import React, {useState} from "react";

//App
import {updateCart} from "../../functions";

const CartItem = ({item, setCart, handleRemoveProductClick}) => {

    const [productCount, setProductCount] = useState(item.qty)

    const handleQtyChange = (e) => {
        if (process.browser) {
            const newQty = e.target.value
            setProductCount(newQty)

            let existingCart = localStorage.getItem('react-wp-cart')
            existingCart = JSON.parse(existingCart)

            const updatedCart = updateCart(existingCart, item, false, newQty)

            setCart(updatedCart)
        }
    }

    return (
        <tr className="react-wp-cart-item">
            <th className="react-wp-cart-element react-wp-cart-close">
                <span className="react-wp-cart-close__icon" onClick={(e) => handleRemoveProductClick(e, item.productId)}>
                   X
                </span>
            </th>
            <td className="react-wp-cart-element">
                {item.image
                    ? <img src={item.image.sourceUrl} srcSet={item.image.srcSet}
                           alt={item.image.title} width="64"/>
                    : <img src='/images/products/product-1.jpg'
                           alt="Product image" width="64"/>
                }
            </td>
            <td className="react-wp-cart-element">
                {item.name}
            </td>
            <td className="react-wp-cart-element">
                {item.price}
            </td>
            <td className="react-wp-cart-element">
                <input
                    type="number"
                    min="1"
                    className="react-wp-cart-item__input"
                    value={productCount}
                    onChange={handleQtyChange}
                />
            </td>
            <td className="react-wp-cart-element">
                {item.totalPrice}
            </td>
        </tr>
    )
}

export default CartItem