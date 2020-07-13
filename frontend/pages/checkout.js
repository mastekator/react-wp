//React
import React from "react";

//App
import Layout from "../components/Layout";
import CheckoutForm from "../components/checkout/CheckoutForm";
import client from "../components/ApolloClient";
import PAYMENT_METHODS_QUERY from "../queries/get-payment-methods";

const CheckoutPage = props => {

    const {paymentMethods} = props

    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="mt-5 mb-4">Оформление заказа</h1>
                <CheckoutForm paymentMethods={paymentMethods}/>
            </div>
        </Layout>
    )
}

CheckoutPage.getInitialProps = async () => {
    const result = await client.query({query: PAYMENT_METHODS_QUERY})

    return {
        paymentMethods: result.data.paymentGateways.nodes
    }
};

export default CheckoutPage