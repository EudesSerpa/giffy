import React, { useState } from "react";
import { useLocation } from "wouter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import useUser from "hooks/useUser";
import register from "services/register";

const initialValues = {
  username: "",
  password: "",
  acceptedTerms: false,
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),

  password: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Required"),

  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
});

function Register() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setError] = useState(false);
  const [, navigate] = useLocation();
  const { login, hasLoginError } = useUser();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    register(values)
      .then(() => {
        resetForm();

        setError(false);
        setSubmitted(true);
        setSubmitting(false);

        login(values);
        if (hasLoginError) {
          navigate("/login");
        } else {
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setTimeout(() => {
          setError(false);
          setSubmitted(false);
          setSubmitting(false);
        }, 1500);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="form">
            <label htmlFor="username">
              Username
              <ErrorMessage name="username" component="small" />
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                className={
                  touched.username ? (errors.username ? "error" : "") : ""
                }
              />
            </label>

            <label htmlFor="password">
              Password
              <ErrorMessage name="password" component="small" />
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className={
                  touched.password ? (errors.password ? "error" : "") : ""
                }
              />
            </label>

            <ErrorMessage name="acceptedTerms" component="small" />
            <label htmlFor="acceptedTerms" className="label--check">
              <Field id="acceptedTerms" type="checkbox" name="acceptedTerms" />I
              accept the terms and conditions
            </label>

            <button type="submit" className="btn" disabled={isSubmitting}>
              Register
            </button>

            {/* Messages */}
            {isSubmitted && (
              <div className="form-submitted--text">
                <p>
                  Register success!
                  <span role="img" aria-label="Register success">
                    ✅
                  </span>
                </p>
              </div>
            )}
            {isError && (
              <div className="form-failed--text">
                <p>
                  Register failed
                  <span role="img" aria-label="Register failed">
                    ❌
                  </span>
                </p>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register;
