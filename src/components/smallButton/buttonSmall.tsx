import { Link } from 'react-router-dom';

import './buttonSmall.scss';

type ButtonSmallProps = {
    children: string,
    link: string,
}

const ButtonSmall = ({ children, link }: ButtonSmallProps) => {

    return (
        <Link className="button-small" to={link}>
                <span className="button-small-text">{children}</span>
        </Link>
    );
}

export default ButtonSmall;