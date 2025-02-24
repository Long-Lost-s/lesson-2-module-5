import { Component } from "react";
import { Home } from "./Home";

export class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogIn = () => {
        this.setState({ isLoggedIn: true })
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const { isLoggedIn } = this.state
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please log</h1>
                    <button onClick={this.handleLogIn}>Log In</button>
                </div>
            </div>
        )
    }
}