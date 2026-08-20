import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import './Header.css';

function Header({ cart }) {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    const [searchInput, setSearchInput] = useState(searchQuery || '');
    const navigate = useNavigate();

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    function handleSearch() {
        navigate(`/?search=${searchInput}`);
    }

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo" src={LogoWhite} />
                        <img className="mobile-logo" src={MobileLogoWhite} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input
                        className="search-bar"
                        type="text"
                        value={searchInput}
                        placeholder="Search"
                        onChange={(event) => {
                            setSearchInput(event.target.value);
                        }}
                        onKeyDown={(event) => {event.key === 'Enter' && handleSearch()}}
                    />
                    <button
                        className="search-button"
                        onClick={handleSearch}
                    >
                        <img className="search-icon" src={SearchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">
                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;