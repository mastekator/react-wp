//React
import React from "react";

//App
import Error from "./Error";
import PaymentMethod from "./PaymentMethod";

const PaymentModes = ({input, handleOnChange, paymentMethods}) => {
    return (
        <div className="mt-3">
            <Error errors={input.errors} fieldName={'paymentMethod'}/>
            {undefined !== paymentMethods && paymentMethods.length
                ? paymentMethods.map(paymentMethod =>
                    (<PaymentMethod key={paymentMethod.id} handleOnChange={handleOnChange}
                                    paymentMethod={paymentMethod}/>))
                : ''
            }
        </div>
    );
};

export default PaymentModes;
