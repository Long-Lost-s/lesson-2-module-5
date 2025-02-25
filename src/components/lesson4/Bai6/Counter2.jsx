import React from "react";
import { useIncrement } from "./Hook/useIncrement";

export function Counter2() {
    const [count, increase] = useIncrement(2);

    return (
        <div>
            <h1>Counter 2: {count}</h1>
            <button onClick={increase}>Add 2</button>
        </div>
    );
}