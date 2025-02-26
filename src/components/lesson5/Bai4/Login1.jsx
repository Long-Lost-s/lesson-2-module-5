import { Formik } from "formik";
import { useState } from "react";

export function Login1() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handleValidate(values) {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit(values) {
        alert("Login successfully");
    }

    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email || ""}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email && (
                                <p>{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={values.password || ""}
                                onChange={handleChange}
                            />
                            {touched.password && errors.password && (
                                <p>{errors.password}</p>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );
}