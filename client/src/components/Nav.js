import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2></h2>
            <Link to="/">Search</Link>
            <Link to="/">Save</Link>
        </nav>
    );
}

export default Nav;