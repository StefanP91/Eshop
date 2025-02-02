import { useState, useEffect } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function getTimeUntilMidnight() {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        const difference = midnight - now;
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
        
        return ( 
            <div className="d-flex gap-3 align-items-center">
                <span className="d-flex flex-column align-items-center">
                    <small className="text-danger fw-bolder">Hours</small>
                    <span className="fs-2 fw-bolder">{hours}</span> 
                </span>
                <span className="fs-2 fw-bolder pt-3 text-danger">
                    :
                </span>
                <span className="d-flex flex-column align-items-center">
                    <small className="text-danger fw-bolder">Minutes</small>
                    <span className="fs-2 fw-bolder">{minutes}</span>
                </span>
                <span className="fs-2 fw-bolder pt-3 text-danger">
                    :
                </span>
                <span className="d-flex flex-column align-items-center">
                    <small className="text-danger fw-bolder">Seconds</small>
                    <span className="fs-2 fw-bolder">{seconds}</span>
                </span>
            </div>
        );
    }

    return (
        <div className="countdown" id="countdown">
            {timeLeft}
        </div>
    );
}

export default Countdown;


