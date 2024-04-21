import './subscriptionCard.css';


const SubscriptionCard = (props) => {

    // eslint-disable-next-line react/prop-types
    const {title, description, price, image} = props;
    return (
        <div className="subs-card-container">
            <img src={image} alt="" className="card-image"/>
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}- <span className="card-subs-period">/month</span></p>
            <button className="card-button">Add subscription</button>
        </div>
    );
}

export default SubscriptionCard;