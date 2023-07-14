import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { schema, NumberMask } from '../Details/Validate';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import toast from 'react-hot-toast';
import MaskedInput from 'react-text-mask';

export const ContactForm = () => {
  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{  name: '', number: '' }} 
          
      validationSchema={schema}
      
      onSubmit={(values, action) => {  
      const duplicateName = contact.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      );

      return duplicateName
      ? toast(`${values.name} is already in contacts.`, { icon: '⚠️' })
      : (dispatch(addContact(values)), action.resetForm());
  }}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name*
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </Label>
        <ErrorMessage name="name" component={'span'} />
        <Label htmlFor="number">
          Number*
          <Field
            type="tel"
            name="number"
            component={({ field }) => (
              <MaskedInput
                {...field}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="The phone number must contain 7 digits"
                mask={NumberMask}
                />
            )}
          />
        </Label>
        <ErrorMessage name="number" component={'span'} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};


