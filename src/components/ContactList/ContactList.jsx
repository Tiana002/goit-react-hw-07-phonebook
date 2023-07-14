import { List, Item, Button, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selector';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
	);

  return (
    <List>
    {filterContacts.map(({ phone, name, id }) => {
      return (
        <Item key={id}>
          <Text>
            {name}: {phone}
          </Text>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </Button>
        </Item>
      );
    })}
  </List>
);
};
  




