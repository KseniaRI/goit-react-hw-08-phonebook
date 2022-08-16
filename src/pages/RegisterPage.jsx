import { Box } from 'components/Box';
import Form from 'react-bootstrap/Form';
import { StyledButton } from './login-page/LoginPage.styled';


export const RegisterPage = () => {
    return (
        <Box as="div"
            width={512}
            mr="auto"
            ml="auto"
        >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>

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
            </Form>
        </Box>
    )
}