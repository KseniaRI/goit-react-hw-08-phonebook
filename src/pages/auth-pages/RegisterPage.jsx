import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Navigate} from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Message, StyledContainer } from './AuthPages.styled';
import { StyledButton, StyledForm } from '../../Forms.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(getIsLoggedIn);
  
  return (
    <>
      {loggedIn ? <Navigate to='/contacts' replace={true} /> :
        <StyledContainer>
          <Message>Join us now!</Message>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('must be a valid email').required('Required'),
              password: Yup.string().required('Required'),
            })
            }
            onSubmit={({ name, email, password }, { resetForm }) => {
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
              isInvalid,
            }) => (
              <StyledForm noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formRegisterName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name" name="name"
                    placeholder="Enter name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <StyledButton variant="primary" type="submit">
                  Register
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </StyledContainer>  
      }
  </>
    )
}


export default RegisterPage;