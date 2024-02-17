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
          <div>
            <SubTitle mb="20px">Follow Us</SubTitle>
            <FollowUs />
          </div>
          <div>
            <SubTitle mb="28px">Popular Drinks1</SubTitle>
            <PopularDrinks />
          </div>
        </SubContainer>
      </FlexContainer>
    </Wrapper>
  );
};

export default AddDrinkPage;
