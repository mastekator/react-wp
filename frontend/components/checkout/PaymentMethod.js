//React
import React from "react";

const PaymentMethod = ({handleOnChange, paymentMethod}) => {

    return (
        <div className="form-check woo-next-payment-input-container mt-2">
            <label className="form-check-label">
                <input onChange={handleOnChange} value={paymentMethod.id} className="form-check-input"
                       name="paymentMethod" type="radio"/>
                <span className="woo-next-payment-content">{paymentMethod.title}</span>
            </label>
        </div>
    )
}

export default PaymentMethod;