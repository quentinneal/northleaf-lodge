import { Link } from 'react-router-dom';

import './buttonBanner.scss';

type ButtonBannerProps = {
    children: string,
    link: string,
}

const ButtonBanner = ({ children, link }: ButtonBannerProps) => {

    return (
        <Link className="button-dark-link" to={link}>
            <button className="button-dark">
                <span className="button-dark-text">{children}</span>
            </button>
        </Link>
    );
}

export default ButtonBanner;