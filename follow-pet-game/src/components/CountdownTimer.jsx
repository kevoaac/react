/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds }) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds]);

    return (
        <div className='countdown-timer'>
            <h3>Seconds Remaining: {seconds}</h3>
        </div>
    );
}

export default CountdownTimer;
