import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import logo from "./images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
    return (
        <nav className="header">
            <Link>
                <img className="header__logo" src={logo} alt=""/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                 <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option__line1">Hello</span>
                        <span className="header__option__line2">Sign,In</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__option__line1">Reservation</span>
                        <span className="header__option__line2">& bookings</span>
                    </div>
                </Link>

            

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <LocalMallIcon/>
                        <span className="header__option__line2 header__basketCount">0</span>
                    </div>
                </Link>

            </div> 
       

            
        </nav>
    )
}

export default Header
