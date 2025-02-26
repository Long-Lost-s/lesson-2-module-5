import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export function MailForm() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      };
    
      return (
        <div className="container">
          <h1>Send Email</h1>
          <Formik
            initialValues={{
              to: "",
              title: "",
              message: "",
              file: null,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.to) {
                errors.to = "Required";
              } else if (!REGEX.email.test(values.to)) {
                errors.to = "Invalid email address";
              }
    
              if (!values.title) {
                errors.title = "Required";
              }
    
              if (!values.message) {
                errors.message = "Required";
              }
    
              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              alert("Sent successfully!!!");
              console.log("Email details:", values);
              resetForm();
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="custom-input">
                  <label>To</label>
                  <Field name="to" type="text" />
                  <ErrorMessage name="to" component="p" className="error" />
                </div>
    
                <div className="custom-input">
                  <label>Title</label>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" component="p" className="error" />
                </div>
    
                <div className="custom-input">
                  <label>Message</label>
                  <Field name="message" as="textarea" rows="4" />
                  <ErrorMessage name="message" component="p" className="error" />
                </div>
    
                <div className="custom-input">
                  <label>Attachment</label>
                  <input
                    type="file"
                    onChange={(event) => setFieldValue("file", event.target.files[0])}
                  />
                </div>
    
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      );
    }