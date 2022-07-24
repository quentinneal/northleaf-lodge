import { Link } from 'react-router-dom';

import './buttonSmall.scss';

const ButtonSmall = ({ children, link }) => {

    return (
        <Link className="button-small" to={link}>
                <span className="button-small-text">{children}</span>
        </Link>
    );
}

export default ButtonSmall;