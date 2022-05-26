import './header.scss';

import { ReactComponent as LeafIcon } from '../../assets/leaf-solid.svg';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    return (
        <div className={`header ${location.pathname !== '/' && 'sticky'}`}>
            <Link className="header-logo" to="/">
                <span className="header-logo-text">NL</span>
                <LeafIcon className="header-logo-text-leaf" />
            </Link>
            <Link className="header-button" to="/search">
                <span className="header-button-text">Book Now</span>
            </Link>
        </div>
    );
}

export default Header;