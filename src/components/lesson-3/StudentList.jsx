import { Component } from "react";

export class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            form: { name: "", phone: "", email: "" },
            isValid: false,
            indexSelected: -1
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form;
            form[event.target.name] = event.target.value;
            return { form };
        }, () => this.checkInValidForm());
    }

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        });
    }

    checkInValidForm = () => {
        const { name, phone, email } = this.state.form;
        const value = name && phone && email;
        this.setState({
            isValid: value
        });
    }

    handdleSubmit = () => {
        if (this.state.isValid) {
            const newList = [...this.state.studentList];
            const { form, indexSelected } = this.state;
            if (indexSelected > -1) {
                newList[indexSelected] = form;
            } else {
                newList.push(form);
            }
            this.setState({
                studentList: newList,
                form: { name: "", phone: "", email: "" },
                isValid: false,
                indexSelected: -1
            });
        }
    }

    handleDelete = (index) => {
        const newList = [...this.state.studentList];
        newList.splice(index, 1);
        this.setState({ studentList: newList });
    }

    render() {
        const { studentList, form, isValid } = this.state;
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={form.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input name="phone" value={form.phone} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handdleSubmit} disabled={!isValid}> {this.state.indexSelected > -1 ? "Update" : "Submit"}</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                                        <button onClick={() => this.handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}