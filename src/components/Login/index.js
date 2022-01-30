import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Spinner from "components/Spinner";

import useUser from "hooks/useUser";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),

  password: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Required"),
});

function Login({ onLogin }) {
  const { isLogged, login, isLoginLoading, hasLoginError, setError } =
    useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
      onLogin && onLogin();
    }
  }, [isLogged, navigate, onLogin]);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    login(values);
    setSubmitting(false);
  };

  if (hasLoginError) {
    setTimeout(() => setError(false), 1500);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
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

            {isLoginLoading ? (
              <Spinner />
            ) : (
              <button type="submit" className="btn" disabled={isLoginLoading}>
                Login
              </button>
            )}

            {/* Message */}
            {hasLoginError && (
              <div className="form-failed--text">
                <p>
                  Login failed
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

export default Login;
