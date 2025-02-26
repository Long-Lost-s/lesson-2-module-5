import { Formik } from "formik";
import { useState } from "react";

export function PremiumLogin() {
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
        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.phone) {
            errors.phone = "Required";
        }
        return errors;
    }

    function handleSubmit(values) {
        alert("Add contact successfully!!!");
    }

    return (
        <>
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                            />
                            {touched.name && errors.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>
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
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={values.phone || ""}
                                onChange={handleChange}
                            />
                            {touched.phone && errors.phone && (
                                <p>{errors.phone}</p>
                            )}
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={values.message || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );
}