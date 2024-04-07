import './stepper.css'

const Stepper = (props) => {
    // eslint-disable-next-line react/prop-types
    const number = props.numbertext;
    // eslint-disable-next-line react/prop-types
    const subtext = props.subtext;
    // eslint-disable-next-line react/prop-types
    const isPassed = props.isPassed;

    return (
        <>
            <div className="general-container">
                <div className={`stepper-container ${isPassed == true ? " passed" : ""}`}>
                    <span>{number}</span>
                </div>
                <div className="stepper-subtext">
                    <span>{subtext}</span>
                </div>
            </div>
        </>)

}

export default Stepper;