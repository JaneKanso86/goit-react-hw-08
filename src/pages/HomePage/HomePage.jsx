import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Phonebook welcome{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
    </div>
  );
}
