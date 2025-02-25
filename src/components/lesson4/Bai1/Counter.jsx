import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue)
    }
    return (
        <div>
            Giá trị {count}
            <div>
                <button onClick={handleClick}>Tăng</button>
            </div>
        </div>
    )
}