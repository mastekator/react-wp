//React
import React from "react";

//App
import Layout from "../components/Layout";
import CheckoutForm from "../components/checkout/CheckoutForm";

const CheckoutPage = props => {
    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="mt-5 mb-4">Оформление заказа</h1>
                <CheckoutForm/>
            </div>
        </Layout>
    )
}

export default CheckoutPage