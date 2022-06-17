import './description.scss';

const Description = ({children, image}) => {

    return (
        <section className="description-container">
            <div className="description">
                <div className="description-text">
                    {children}
                </div>
            </div>
            <img className="description-image" src={image} alt="Buck Lake, Mt Hood National Forest, USA" />
        </section>
    );
}

export default Description;