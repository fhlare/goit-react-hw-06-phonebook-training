import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteButton,
  Text,
  NumberText,
} from './ContactList/ContactCard.styled';
import { deleteContatc } from '../redux/contactsSlice';
import { List, ListItem } from './ContactList/ContactList.styled';


export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const visibleContatcs = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <List>
      {visibleContatcs.map(item => (
        <ListItem key={item.id}>
          <Text>
            {item.name}
            <NumberText>{item.number}</NumberText>
          </Text>
          <DeleteButton onClick={() => dispatch(deleteContatc(item.id))}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};
