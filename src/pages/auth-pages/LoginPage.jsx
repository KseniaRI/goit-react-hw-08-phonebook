import Form from 'react-bootstrap/Form';
import { StyledButton, StyledForm } from '../../Forms.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
            email: Yup.string().email('must be a valid email').required('Required'),
            password: Yup.string().required('Required'),
        })
        } 
        onSubmit={({ email, password }, { resetForm }) => {
          dispatch(login({ email, password }));
          resetForm();
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isInvalid
        }) => (
          <StyledForm noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formLoginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
              />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <StyledButton variant="primary" type="submit">
                  Submit
                </StyledButton>
            </StyledForm>
         )}
    </Formik>
  </>
  )
}