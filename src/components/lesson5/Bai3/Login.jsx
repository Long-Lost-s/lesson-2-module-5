import { useState } from "react"

export function Login() {
    const messageError = {
        email: "Email error",
        password: "Erorrrrrrrr!!"
    }

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const [form, setForm] = useState({});

    function handleChange(e) {
        let error = REGEX[e.target.name].test(e.target.value)
            ? ""
            : messageError[e.target.name]
        setForm({
            ...form,
            [e.target.name]: { value: e.target.value, error: error }
        });
    }

    function handleSubmit() {
        const isFilled =
            form.email && form.email.value && form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error)
        alert(
            isFilled && !isError
                ? "Login successfully!!!"
                : "Fail to login!"
        );
    }

    return (
        <>
            <form>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        value={(form.email && form.email.value || "")}
                        onChange={handleChange}
                        required
                    />
                    {form.email && form.email.error && (
                        <p>{form.email.error}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value || "")}
                        onChange={handleChange}
                        required
                    />
                    {form.password && form.password.error && (
                        <p>{form.password.error}</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}