//React
import React from "react";

//App
import Header from "./Header";
import '../styles/Style.css';
import {AppProvider} from "./context/AppContext";

//Third-party
import Head from 'next/head';

const Layout = (props) => {
    return (
        <AppProvider>
            <div>
                <Head>
                    <title>Woocommerce React Theme</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
                </Head>
                <Header/>
                {props.children}
            </div>
        </AppProvider>
    );
};

export default Layout;
