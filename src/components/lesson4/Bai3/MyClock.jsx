import { useClock } from "./Hook/UseClock";
import './Clock.css';

export function MyClock() {
    let [time, ampm] = useClock();
    return (
        <div className="clock-contianer">
            <span className="clock-time"> {time} </span>
            <span className="clock-ampm"> {ampm} </span>
        </div>
    );
}