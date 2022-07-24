import { Link } from 'react-router-dom';

import './buttonBanner.scss';

const ButtonBanner = ({ children, link }) => {

    return (
        <Link className="button-dark-link" to={link}>
            <button className="button-dark">
                <span className="button-dark-text">{children}</span>
            </button>
        </Link>
    );
}

export default ButtonBanner;