import Form from 'react-bootstrap/Form';
import { StyledButton, StyledForm } from './AuthPages.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('must be a valid email').required('Required'),
            password: Yup.string().required('Required'),
        })
        } 
      onSubmit={({ name, email, password }, { resetForm }) => {
        console.log({ name, email, password });
          dispatch(register({ name, email, password }));
          resetForm();
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <StyledForm noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRegisterName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name" name="name"
                    placeholder="Enter name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                </Form.Group>
                <StyledButton variant="primary" type="submit">
                  Submit
                </StyledButton>
            </StyledForm>
         )}
    </Formik>
    <ToastContainer autoClose={3000}/>
  </>
    )
}