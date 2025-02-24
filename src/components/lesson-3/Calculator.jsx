import { Component, useState } from "react";

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            result: 0
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddition = () => {
        const { number1, number2 } = this.state;
        this.setState({ result: parseInt(number1) + parseInt(number2) });
    };

    handleSubtraction = () => {
        const { number1, number2 } = this.state;
        this.setState({ result: parseInt(number1) - parseInt(number2) });
    };

    handleMultiplication = () => {
        const { number1, number2 } = this.state;
        this.setState({ result: parseInt(number1) * parseInt(number2) });
    };

    handleDivision = () => {
        const { number1, number2 } = this.state;
        if (parseInt(number2) === 0) {
            this.setState({ result: 'Cannot divide by zero' });
        } else {
            this.setState({ result: parseInt(number1) / parseInt(number2) });
        }
    };

    render() {
        return (
            <div style={{ border: "1px solid black", padding: "20px", width: "250px" }}> 
                <input
                    type="text"
                    name="number1"
                    value={this.state.number1}
                    onChange={this.handleChange}
                    placeholder="0"
                />
                <input
                    type="text"
                    name="number2"
                    value={this.state.number2}
                    onChange={this.handleChange}
                    placeholder="0"
                />
                <p>Result: {this.state.result}</p>
                <button onClick={this.handleAddition}>+</button>
                <button onClick={this.handleSubtraction}>-</button>
                <button onClick={this.handleMultiplication}>*</button>
                <button onClick={this.handleDivision}>/</button>
            </div>
        );
    }
}