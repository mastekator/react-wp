import Error from "./Error";

const PaymentModes = ( { input, handleOnChange } ) => {
	return (
		<div className="mt-3">
			<Error errors={ input.errors } fieldName={ 'paymentMethod' }/>
			{/*Direct bank transfers*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="bacs" className="form-check-input" name="paymentMethod" type="radio"/>
					<span className="woo-next-payment-content">Прямой банковский перевод</span>
				</label>
			</div>
			{/*Pay with Paypal*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="paypal" className="form-check-input" name="paymentMethod" type="radio"/>
					<span className="woo-next-payment-content">Оплата с помощью Paypal</span>
				</label>
			</div>
			{/*Check Payments*/}
			{/*<div className="form-check woo-next-payment-input-container mt-2">*/}
			{/*	<label className="form-check-label">*/}
			{/*		<input onChange={ handleOnChange } value="cheque" className="form-check-input" name="paymentMethod" type="radio"/>*/}
			{/*		<span className="woo-next-payment-content">Check Payments</span>*/}
			{/*	</label>*/}
			{/*</div>*/}
			{/*Pay with Stripe*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cod" className="form-check-input" name="paymentMethod" type="radio"/>
					<span className="woo-next-payment-content">Оплата при доставке</span>
				</label>
			</div>
			{/*<div className="form-check woo-next-payment-input-container mt-2">*/}
			{/*	<label className="form-check-label">*/}
			{/*		<input onChange={ handleOnChange } value="jccpaymentgatewayredirect" className="form-check-input" name="paymentMethod" type="radio"/>*/}
			{/*		<span className="woo-next-payment-content">JCC</span>*/}
			{/*	</label>*/}
			{/*</div>*/}
			{/*<div className="form-check woo-next-payment-input-container mt-2">*/}
			{/*	<label className="form-check-label">*/}
			{/*		<input onChange={ handleOnChange } value="ccavenue" className="form-check-input" name="paymentMethod" type="radio"/>*/}
			{/*		<span className="woo-next-payment-content">CC Avenue</span>*/}
			{/*	</label>*/}
			{/*</div>*/}
			{/*	Payment Instructions*/}
		</div>
	);
};

export default PaymentModes;
