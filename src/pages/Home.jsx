import { Box } from "components/Box"
import { PageTitle } from "components/page-title/PageTitle";
import { PhonebookForm } from "components/phonebook-form/PhonebokForm";


export const HomePage = () => {
    return (
        <Box as="div">
            <PageTitle title="Phonebook" />
            <PhonebookForm />
        </Box>
    )
}