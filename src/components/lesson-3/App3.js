import React, { Component } from "react";
import { Home } from "./Home";
import "./App3.css";

export class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { email: "", password: "", isRemember: false },
            isValid: false,
            isLoggedIn: false
        };
    }

    handleChange = (event) => {
        this.setState((state) => {
            const { form } = state;
            form[event.target.name] = event.target.value;
            return { form };
        }, () => this.checkValidForm());
    }

    handleChangeCheckbox = () => {
        this.setState((state) => {
            const { form } = state;
            form.isRemember = !form.isRemember;
            return { form };
        }, () => this.checkValidForm());
    }

    checkValidForm = () => {
        const { email, password } = this.state.form;
        const value = email && password;
        this.setState({ isValid: value });
    }

    handleSubmit = () => {
        if (this.state.isValid) {
            this.setState({ isLoggedIn: true });
        }
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const { isLoggedIn, form } = this.state;
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />);
        return (
            <div className="container">
                <form>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                    <h1>Please sign in</h1>
                    <div>
                        <input type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
                        <label>Email address</label>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
                        <label>Password</label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
                        </label>
                    </div>
                    <button type="button" onClick={this.handleSubmit}>Sign in</button>
                    <p>© 2017–2021</p>
                </form>
            </div>
        );
    }
}