import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContactsLoading } from '../../redux/contacts/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your tasks</PageTitle>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
