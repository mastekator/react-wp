//React
import React from "react";

const OrderSuccess = (props) => {

    const {response} = props;

    if (!response) {
        return null;
    }

    const responseData = response.checkout;

    console.log(response)

    // window.location.href = responseData.redirect;

    return (
        <div>
            {'success' === responseData.result ? (
                <div>
                    <h2>Номер заказа: {responseData.order.orderId} </h2>
                    <p>Статус : {responseData.order.status}</p>
                </div>
            ) : ''}
        </div>
    )
};

export default OrderSuccess;
