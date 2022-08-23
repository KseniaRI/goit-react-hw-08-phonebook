import { Header } from "components/header/Header";
import { PhonebookForm } from "components/phonebook-form/PhonebokForm";
import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <Header/>
            <PhonebookForm />
        </Container>
    )
}

export default HomePage;