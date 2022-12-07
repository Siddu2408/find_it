import { Field, Form, Formik, FormikHelpers } from "formik";

import { SignInFormTypes } from "../../types/signin";
import "./SignInFrom.scss";

const SignInForm: React.FC<{}> = () => {
  const initialValues: SignInFormTypes = {
    email: "",
    password: "",
  };
  return (
    <div className='signin-form-container'>
      <div className='text-grey-900 py-3 font-bold text-lg my-3 mt-4'>
        Signup
      </div>
      <Formik
        initialValues={initialValues}
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
    </div>
  );
};

export default SignInForm;
