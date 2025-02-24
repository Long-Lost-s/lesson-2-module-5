import { Component } from "react";

export class StudenInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                { id: 1, name: "Long", address: "HaNoi" },
                { id: 2, name: "Long", address: "HaNoi" },
                { id: 3, name: "Long", address: "HaNoi" }
            ]
        }
    }

    render() {
        return (
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>ID</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.student.map(student => (
                        <tr key={student.id}>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.id}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}