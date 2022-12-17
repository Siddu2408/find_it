import { Field, Form, Formik, FormikErrors, FormikHelpers } from "formik";

import { SignInFormTypes } from "../../types/signin";
import "./SignInFrom.scss";
import { Link } from "react-router-dom";

const validate = (values: SignInFormTypes) => {
  console.log("values are", values);
  const errors: FormikErrors<SignInFormTypes> = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SignInForm: React.FC<{}> = () => {
  const initialValues: SignInFormTypes = {
    email: "",
    password: "",
  };
  return (
    <div className='w-full flex justify-center align-middle h-auto mt-16'>
      <div className='signin-form-container'>
        <div className='text-grey-900 py-3 font-bold text-lg my-3 mt-4 flex justify-center'>
          Log In
        </div>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(
            values: SignInFormTypes,
            { setSubmitting }: FormikHelpers<SignInFormTypes>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
              >
                Email
              </label>
              <Field
                id='email'
                name='email'
                placeholder='john@acme.com'
                type='email'
              />
              {touched.email && errors.email && (
                <div className='error'>{errors.email}</div>
              )}

              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
              >
                Password
              </label>
              <Field
                id='password'
                name='password'
                placeholder='password'
                type='password'
              />
              {touched.password && errors.password && (
                <div className='error'>{errors.password}</div>
              )}
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
        <div className='lg:tex-base text-sm'>
          Don't have an account yet ?
          <Link to={"/signup"} className='text-blue-600'>
            {" "}
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
