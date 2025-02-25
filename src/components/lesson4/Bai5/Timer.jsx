import { useEffect, useState } from "react";

export function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer === 0) {
            alert("Time's up");
            return;
        }

        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer -1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer]);

    return (
        <div>
            <h1>Timer: {timer}</h1>
        </div>
    )
}