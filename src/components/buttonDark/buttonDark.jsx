import './buttonDark.scss';

const ButtonDarkTheme = ({ children }) => {

    return (
        <button className="buttonDark">
            <span className="buttonDark-text">{children}</span>
        </button>
    );
}

export default ButtonDarkTheme;