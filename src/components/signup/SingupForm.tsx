import { Formik, Field, Form, FormikHelpers, FormikErrors } from "formik";

import { SignUp } from "../../types/signup";
import "./SingupForm.scss";

const validate = (values: SignUp) => {
  console.log("values are", values);
  const errors: FormikErrors<SignUp> = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (
    !/^[6-9]{1}[0-9]{9}/i.test(values.phoneNumber) ||
    String(values.phoneNumber).length > 10
  ) {
    errors.phoneNumber = "Invalid Phone Number";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(values.password)
  ) {
    errors.password =
      "Password must contains 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password mismatch";
  }

  return errors;
};

const SingupForm: React.FC<{}> = () => {
  const initialValues: SignUp = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div className='signup-form-container'>
      <div className='text-grey-900 py-3 font-bold text-lg my-3 mt-4'>
        Signup
      </div>
      <Formik
        validate={validate}
        initialValues={initialValues}
        onSubmit={(
          values: SignUp,
          { setSubmitting }: FormikHelpers<SignUp>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
                >
                  First Name
                </label>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='first name'
                />
                {touched.firstName && errors.firstName && (
                  <div className='error'>{errors.firstName}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
                >
                  Last Name
                </label>
                <Field id='lastName' name='lastName' placeholder='last name' />
                {touched.lastName && errors.lastName && (
                  <div className='error'>{errors.lastName}</div>
                )}
              </div>
            </div>

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
              htmlFor='phoneNumber'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
            >
              Phone Number
            </label>
            <Field
              id='phoneNumber'
              name='phoneNumber'
              placeholder='phone number'
              type='number'
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <div className='error'>{errors.phoneNumber}</div>
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
            <label
              htmlFor='confirmPassword'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white my-3'
            >
              Confirm Password
            </label>
            <Field
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              type='password'
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div className='error'>{errors.confirmPassword}</div>
            )}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SingupForm;
