import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm onSubmit={handleRegister} />
    </div>
  );
}
