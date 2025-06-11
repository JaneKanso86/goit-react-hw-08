import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContactsLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Yout contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
