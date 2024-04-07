import  './progress.css';
import Stepper from "../stepper/stepper.jsx";
const ProgressComponent = () => {

    return <>

        <div className="container">
            <Stepper numbertext="1" subtext = "Travelers" isPassed={true} />
            <Stepper numbertext="2" subtext = "Seat"   isPassed={true}  />
            <Stepper numbertext="3" subtext = "Food"  />
            <Stepper numbertext="4" subtext = "Products"  />
            <Stepper numbertext="5" subtext = "Payment" />
        </div>
    </>
}

export default ProgressComponent;