import { Component } from "react";

export class Hello extends Component {
    componentWillUnmount() {
        alert('Cái component này chuẩn bị biến mất nè')
    }
    render() {
        return <h1>Hi</h1>
    }
}