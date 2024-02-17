import {
  Wrapper,
  FlexContainer,
  SubContainer,
  SubTitle,
} from './AddDrinkPage.styled';

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
        <SubContainer>
          <SubTitle>Follow Us</SubTitle>
          <p className="test1">Follow us test</p>
          <FollowUs />

          <SubTitle>Popular Drinks</SubTitle>
          <PopularDrinks />
        </SubContainer>
      </FlexContainer>
    </Wrapper>
  );
};

export default AddDrinkPage;
