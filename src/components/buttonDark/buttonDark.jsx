import { Link } from 'react-router-dom';

import './buttonDark.scss';

const ButtonDarkTheme = ({ children, link }) => {

    return (
        <Link className="button-dark-link" to={link}>
            <button className="button-dark">
                <span className="button-dark-text">{children}</span>
            </button>
        </Link>
    );
}

export default ButtonDarkTheme;