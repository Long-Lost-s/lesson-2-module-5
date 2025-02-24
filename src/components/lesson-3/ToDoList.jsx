import { Component } from "react";

export class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        };
    }

    handleChange = (event) => {
        this.setState({ item: event.target.value });
    }

    handleAddItem = (even) => {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.item],
            item: ''
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input type="text" value={this.state.item} onChange={this.handleChange} />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}