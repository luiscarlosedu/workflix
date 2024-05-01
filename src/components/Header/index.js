import React from "react";
import { Link } from "react-router-dom";
import { VscVm } from "react-icons/vsc";
import './index.css'

function Header() {
    return(
        <header>
            <div className="logo">
                <VscVm className="logo-mark" />
                <Link to='/'>WorkFlix</Link>
            </div>
            <nav>
                <Link to='/favorites'>Favorites</Link>
            </nav>
        </header>
    )
}

export default Header;