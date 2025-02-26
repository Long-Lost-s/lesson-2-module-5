import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './SuperBook'


function SuperBook() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", number: "" });
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  return (
    <div className="container">
      <h1>Book Manager</h1>
      <Formik
        initialValues={form}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.number) {
            errors.number = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          const newBooks = [...books];
          if (indexSelected > -1) {
            newBooks.splice(indexSelected, 1, values);
          } else {
            newBooks.push(values);
          }
          setBooks(newBooks);
          setForm({ title: "", number: "" });
          setIndexSelected(-1);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <div className="custom-input">
              <label>Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="p" className="error" />
            </div>

            <div className="custom-input">
              <label>Number</label>
              <Field name="number" type="number" />
              <ErrorMessage name="number" component="p" className="error" />
            </div>

            <button type="submit">
              {indexSelected > -1 ? "Update" : "Add"}
            </button>
          </Form>
        )}
      </Formik>

      <h2>Book List</h2>
      {books.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.number}</td>
                <td>
                  <button onClick={() => handleSelect(book, index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default SuperBook;