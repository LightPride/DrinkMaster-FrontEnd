import { Container, Title } from './AddDrinkPage.styled';

import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import FollowUs from '../../components/FollowUs/FollowUs';

const AddDrinkPage = () => {
  return (
    <Container>
      <PageTitle title="test page title" />
      <AddDrinkForm />
      <FollowUs />
      <PopularDrinks />
    </Container>
  );
};

export default AddDrinkPage;
