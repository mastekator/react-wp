//React
import React, {useState, useContext} from "react";

//App
import {AppContext} from "../context/AppContext";
import {getFormattedCart} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";

//Third-party
import {useQuery, useMutation} from "@apollo/react-hooks";
import Link from "next/link";
import {v4} from 'uuid';

const AddToCart = (props) => {

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
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

    // Add to Cart Mutation.
    const [addToCart, {data: addToCartRes, loading: addToCartLoading, error: addToCartError}] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {

            // If error.
            if (addToCartError) {
                setRequestError(addToCartError.graphQLErrors[0].message);
            }

            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error.graphQLErrors[0].message);
            }
        }
    });

    const handleAddToCartClick = () => {
        // handleAddToCartLocalStorage();
        setRequestError(null);
        addToCart();
    };

    return (
        <div>
            {addToCartLoading && <p>Добавляется...</p>}

            {"ExternalProduct" === product.__typename ? (
                    <a href={product.externalUrl} target="_blank" className="btn btn-secondary">Купить</a>
                ) :
                <button onClick={handleAddToCartClick} className="btn btn-secondary">Добавить в корзину</button>
            }
            {showViewCart ? (
                <Link href="/cart">
                    <button className="btn btn-secondary">Просмотреть корзину</button>
                </Link>
            ) : ''}
        </div>
    );
};

export default AddToCart;