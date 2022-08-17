import Form from 'react-bootstrap/Form';
import { StyledButton, StyledForm } from './AuthPages.styled';


export const LoginPage = () => {
    return (
            <StyledForm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <StyledButton variant="primary" type="submit">
                  Submit
                </StyledButton>
            </StyledForm>
    )
}