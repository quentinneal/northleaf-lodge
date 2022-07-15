import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import { ReactComponent as LeafIcon } from '../../assets/leaf-solid.svg';

const Header = () => {

    const location = useLocation();

    return (
        <header className={`header ${(location.pathname === '/search' || location.pathname === '/checkout') && 'sticky'} `}>
            <Link className="header-logo" to="/">
                <span className="header-logo-text">NL</span>
                <LeafIcon className="header-logo-text-leaf" />
            </Link>
            <Link className="header-button" to="/search">
                <span className="header-button-text">Book Now</span>
            </Link>
        </header>
    );
}

export default Header;