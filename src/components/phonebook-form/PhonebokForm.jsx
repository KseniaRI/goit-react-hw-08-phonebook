import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { getItems } from 'redux/contacts/phonebook-selectors';
import { saveContact } from 'redux/contacts/phonebook-operations';
import { StyledButton, StyledForm } from '../../Forms.styled';
import { toast } from 'react-toastify';

const phonePattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const PhonebookForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

    return (
    <>
    <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object({
            name: Yup.string().matches(namePattern, 'Insert first name and second name').required('Required'),
            number: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
        })
        } 
        onSubmit={({ name, number }, { resetForm }) => {
          const contactNames = items.map(item => item.name);
              
          if (contactNames.includes(name)) {
            toast.error(`${name} is already in contacts`);
          } else {
            const newContact = { name, number };
            dispatch(saveContact(newContact));
          }
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
              <Form.Group className="mb-3" controlId="formContactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Jack Black"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                />
                  <Form.Control.Feedback type="invalid">
                      {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactNumber">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="number"
                    placeholder="123-45-67"
                    value={values.number}
                    onChange={handleChange}
                    // isValid={touched.number && !errors.number}
                    isInvalid={!!errors.number}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.number}
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

PhonebookForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
  )
}