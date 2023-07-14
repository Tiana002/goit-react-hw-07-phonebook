import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { schema } from '../Details/Validate';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{  name: '', number: '' }} 
          
      validationSchema={schema}
      
      onSubmit={(values, actions) => {
      
        dispatch(addContact(values));
        actions.resetForm();
      }}     
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name*
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <ErrorMessage name="name" component={'span'} />
        <Label htmlFor="number">
          Number*
          <Field
            type="tel"
            name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
          />
        </Label>
        <ErrorMessage name="number" component={'span'} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};


