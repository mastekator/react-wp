//React
import React from 'react';

//App
import countryList from './country-list';
import Error from "./Error";

const Billing = ({input, handleOnChange}) => {
    return (
        <React.Fragment>
            {/*Name*/}
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                        <label htmlFor="first-name">
                            Имя
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.firstName} type="text" name="firstName"
                               className="form-control woo-next-checkout-input" id="first-name"/>
                        <Error errors={input.errors} fieldName={'firstName'}/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="last-name">
                            Фамилия
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.lastName} type="text" name="lastName"
                               className="form-control woo-next-checkout-input" id="last-name"/>
                        <Error errors={input.errors} fieldName={'lastName'}/>
                    </div>
                </div>
            </div>
            {/* Company Name */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="first-name">Название компании</label>
                        <input onChange={handleOnChange} value={input.company} type="text" name="company"
                               className="form-control woo-next-checkout-input" id="first-name"/>
                        <Error errors={input.errors} fieldName={'company'}/>
                    </div>
                </div>
            </div>
            {/* Country */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="country-select">
                            Страна
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <select onChange={handleOnChange} value={input.country} name="country"
                                className="form-control woo-next-checkout-input" id="country-select">
                            <option value="">Выберите страну</option>
                            {countryList.length && (
                                countryList.map((country, index) => (
                                    <option key={`${country}-${index}`}
                                            value={country.countryCode}>{country.countryName}</option>
                                ))
                            )}
                        </select>
                        <Error errors={input.errors} fieldName={'country'}/>
                    </div>
                </div>
            </div>
            {/* Street Address */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="street-address">
                            Адрес
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input type="text" onChange={handleOnChange} value={input.address1} name="address1"
                               placeholder="Номер дома и улица"
                               className="form-control woo-next-checkout-input"
                               id="street-address"/>
                        <Error errors={input.errors} fieldName={'address1'}/>
                        <br/>
                        <input type="text" onChange={handleOnChange} value={input.address2} name="address2"
                               placeholder="Номер квартиры"
                               className="form-control woo-next-checkout-input" id="first-name"/>
                    </div>
                </div>
            </div>
            {/* Town/City */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="city">
                            Город
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.city} type="text" name="city"
                               className="form-control woo-next-checkout-input" id="city"/>
                        <Error errors={input.errors} fieldName={'city'}/>
                    </div>
                </div>
            </div>
            {/* County */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="state">
                            Область
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.state} type="text" name="state"
                               className="form-control woo-next-checkout-input" id="state"/>
                        <Error errors={input.errors} fieldName={'state'}/>
                    </div>
                </div>
            </div>
            {/* Post Code */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="post-code">
                            Индекс
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.postcode} type="text" name="postcode"
                               className="form-control woo-next-checkout-input" id="post-code"/>
                        <Error errors={input.errors} fieldName={'postcode'}/>
                    </div>
                </div>
            </div>
            {/*Phone & Email*/}
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                        <label htmlFor="phone">
                            Телефон
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.phone} type="text" name="phone"
                               className="form-control woo-next-checkout-input" id="phone"/>
                        <Error errors={input.errors} fieldName={'phone'}/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <input onChange={handleOnChange} value={input.email} type="email" name="email"
                               className="form-control woo-next-checkout-input" id="email"/>
                        <Error errors={input.errors} fieldName={'email'}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Billing;
