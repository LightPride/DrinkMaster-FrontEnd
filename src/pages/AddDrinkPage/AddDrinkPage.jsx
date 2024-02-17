import { Wrapper, FlexContainer } from './AddDrinkPage.styled';

import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import FollowUs from '../../components/FollowUs/FollowUs';

const AddDrinkPage = () => {
  return (
    <Wrapper>
      <PageTitle title="Add drink" />
      <FlexContainer>
        <AddDrinkForm />

        <FollowUs />
        <PopularDrinks />
      </FlexContainer>
    </Wrapper>
  );
};

export default AddDrinkPage;
