import { useState } from "react";

export function SignUp() {

    const messageError = {
        username: "Username error",
        password: "Password error",
        email: "Email error",
        confirmPassword: "confirmPassword must be same",
    }

    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/

    }

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = "";
        if (event.target.name === "password") {
            if (form.confirmPassword && form.confirmPassword.value) {
                error =
                    event.target.value === form.confirmPassword.value
                        ? ""
                        : messageError[event.target.name];
            } else {
                error = REGEX[event.target.name].test(event.target.value)
                    ? ""
                    : messageError[event.target.name]
            }
        } else if (event.target.name === "confirmPassword") {
            error =
                event.target.value === form.password.value
                    ? ""
                    : messageError[event.target.name];
        } else {
            error = REGEX[event.target.name].test(event.target.value)
                ? ""
                : messageError[event.target.name]
        }
        setForm({
            ...form,
            [event.target.name]: { value: event.target.value, error: error }
        })
    }


    function handleSubmit() {
        const isFilled =
            form.username &&
            form.username.value &&
            form.email &&
            form.email.value &&
            form.password &&
            form.password.value &&
            form.confirmPassword &&
            form.confirmPassword.value;

        const isError = isFilled && (
            form.username.error ||
            form.password.error ||
            form.email.error ||
            form.confirmPassword.error
        )

        alert(
            isFilled && !isError
                ? "Sign up successfully!"
                : "Fall to sign up!"
        );
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input
                        name="username"
                        value={(form.username && form.username.value) || ""}
                        onChange={handleChange}
                    />
                    {form.username && form.username.error && (
                        <p>{form.username.error}</p>)}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && (
                        <p>{form.email.error}</p>)}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange} />
                    {form.password && form.password.error && (
                        <p>{form.password.error}</p>)}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={(form.confirmPassword && form.confirmPassword.value) || ""}
                        onChange={handleChange} />
                    {form.confirmPassword && form.confirmPassword.error && (
                        <p>{form.confirmPassword.error}</p>)}
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}   