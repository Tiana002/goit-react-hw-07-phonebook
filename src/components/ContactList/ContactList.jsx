import { List, Item, Button, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilters } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
	);

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
    {filterContacts.map(contact => {
      return (
        <Item key={nanoid()}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Button
            type="button"
            onClick={() => {
              handleRemoveContact(contact.id);
            }}
          >
            delete
          </Button>
        </Item>
      );
    })}
  </List>
);
};
  




