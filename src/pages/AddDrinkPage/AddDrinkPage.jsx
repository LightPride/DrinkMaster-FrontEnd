import { Container, Title } from './AddDrinkPage.styled';

import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
// імпортнути компонент фолловАс

const AddDrinkPage = () => {
  return (
    <Container>
      <PageTitle title="test page title" />
      <AddDrinkForm />
      {/* компонент фолловАс */}
      <PopularDrinks />
    </Container>
  );
};

export default AddDrinkPage;
