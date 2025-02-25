import { useState } from "react";

const colorList = ["Black", "Blue", "White", "SuperBlack", "Brown"];
const carList = ["VinFast", "Honda", "Mercedes", "Nigga"];
export function SelectCar() {
    const [selectedCar, setSelectedCar] = useState({ car: carList[0], color: colorList[0] });

    const handleChange = (event) => {
        selectedCar((prevState) => ({
            ...prevState,
            car: event.target.value
        }));
    };

    const handleColorChange = (event) => {
        setSelectedCar((prevState) => ({
            ...prevState,
            color: event.target.value
        }));
    };

    return (
        <div>
            <h1>Select Your Car</h1>
            <div>
                <label>Car: </label>
                <select value={selectedCar.car} onChange={handleChange}>
                    {carList.map((car, index) => (
                        <option key={index} value={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Color: </label>
                <select value={selectedCar.color} onChange={handleColorChange}>
                    {colorList.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p>
                    You selected a {selectedCar.color} - {selectedCar.car}
                </p>
            </div>
        </div>
    );
}