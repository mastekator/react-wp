//React
import React, {useContext} from "react";

//App
import Nav from "./Nav";
import {AppContext} from "./context/AppContext";

const Header = () => {

    return (
        <div>
            <Nav/>
        </div>
    )
};

export default Header;
