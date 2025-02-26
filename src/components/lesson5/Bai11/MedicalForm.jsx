import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function MedicalForm() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" },
  ];

  return (
    <div className="container">
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={{
          name: "",
          passport: "",
          birthYear: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          insurance: false,
          province: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = "Required";
          if (!values.passport) errors.passport = "Required";
          if (!values.birthYear) errors.birthYear = "Required";
          if (!values.nationality) errors.nationality = "Required";
          if (!values.phone) errors.phone = "Required";
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          alert("Khai báo thành công!");
          console.log("Form values:", values);
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            {/* Họ tên */}
            <div className="custom-input">
              <label>Họ tên</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="p" className="error" />
            </div>

            {/* Số hộ chiếu / CMND */}
            <div className="custom-input">
              <label>Số hộ chiếu / CMND</label>
              <Field name="passport" type="text" />
              <ErrorMessage name="passport" component="p" className="error" />
            </div>

            {/* Năm sinh */}
            <div className="custom-input">
              <label>Năm sinh</label>
              <Field name="birthYear" type="number" />
              <ErrorMessage name="birthYear" component="p" className="error" />
            </div>

            {/* Giới tính */}
            <div className="custom-input">
              <label>Giới tính</label>
              <div className="flex">
                {SEX_LIST.map((sex) => (
                  <label key={sex.value}>
                    <Field type="radio" name="gender" value={sex.value} />
                    {sex.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Quốc tịch */}
            <div className="custom-input">
              <label>Quốc tịch</label>
              <Field name="nationality" type="text" />
              <ErrorMessage name="nationality" component="p" className="error" />
            </div>

            {/* Công ty làm việc */}
            <div className="custom-input">
              <label>Công ty làm việc</label>
              <Field name="company" type="text" />
            </div>

            {/* Bộ phận làm việc */}
            <div className="custom-input">
              <label>Bộ phận làm việc</label>
              <Field name="department" type="text" />
            </div>

            {/* Bảo hiểm y tế */}
            <div className="custom-input flex">
              <Field type="checkbox" name="insurance" />
              <label>Có thẻ bảo hiểm y tế</label>
            </div>

            <h2>Địa chỉ liên lạc tại Việt Nam</h2>

            {/* Tỉnh thành */}
            <div className="custom-input">
              <label>Tỉnh thành</label>
              <Field name="province" type="text" />
            </div>

            {/* Quận / Huyện */}
            <div className="custom-input">
              <label>Quận / Huyện</label>
              <Field name="district" type="text" />
            </div>

            {/* Phường / Xã */}
            <div className="custom-input">
              <label>Phường / Xã</label>
              <Field name="ward" type="text" />
            </div>

            {/* Địa chỉ cụ thể */}
            <div className="custom-input">
              <label>Số nhà, phố, tổ dân phố / thôn / đội</label>
              <Field name="address" type="text" />
            </div>

            {/* Điện thoại */}
            <div className="custom-input">
              <label>Điện thoại</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component="p" className="error" />
            </div>

            {/* Email */}
            <div className="custom-input">
              <label>Email</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            {/* Nút Submit */}
            <button type="submit">Gửi tờ khai</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MedicalForm;
