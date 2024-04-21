import './sellSubscription.css';
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const SellSubscription = () => {

    const [packages, setPackages] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/subscription_packages").then(
            response => setPackages(response.data),
        ).catch(error => console.log(error))
    }, []);
    return (
        <div className="subs-container">
            <div className="subs-info">
                <h1 className="subs-title">Get the most out of your mobile <br/> with the right subscription</h1>
                <p className="subs-description">All devices come with free delivery or pickup as standard. See
                    information
                    on <br/> available shopping options for your location.</p>
            </div>
            <div className="packages-container">
                {packages.map((packageItem) => {
                    return <SubscriptionCard key={packageItem.id} title={packageItem.title} description={packageItem.description} price={packageItem.price} image={packageItem.image_path}/>
                })}
            </div>

            <button className="subs-button">See all subscriptions</button>
        </div>
    );
}

export default SellSubscription;