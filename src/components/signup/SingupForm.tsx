import { Formik, Field, Form, FormikHelpers } from "formik";

import { SignUp } from "../../types/signup";
import "./SingupForm.scss";

const SingupForm: React.FC<{}> = () => {
  const initialValues: SignUp = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  return (
    <div className='signup-form-container'>
      <div className='text-grey-900 py-3 font-bold text-lg'>Signup</div>
      <Formik
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
            <label
              htmlFor='firstName'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white'
            >
              First Name
            </label>
            <Field
              id='firstName'
              className='bg-grey-50 border border-grey-300 text-gray-900 text-sm rounded-sm
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='firstName'
              placeholder='first name'
            />

            <label
              htmlFor='lastName'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white'
            >
              Last Name
            </label>
            <Field id='lastName' name='lastName' placeholder='last name' />

            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white'
            >
              Email
            </label>
            <Field
              id='email'
              name='email'
              placeholder='john@acme.com'
              type='email'
            />
            <label
              htmlFor='phoneNumber'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white'
            >
              Phone Number
            </label>
            <Field
              id='phoneNumber'
              name='phoneNumber'
              placeholder='phone number'
              type='number'
            />
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-grey-900 dark:text-white'
            >
              Password
            </label>
            <Field
              id='password'
              name='password'
              placeholder='password'
              type='password'
            />

            <button type='submit' className='bg-'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SingupForm;
