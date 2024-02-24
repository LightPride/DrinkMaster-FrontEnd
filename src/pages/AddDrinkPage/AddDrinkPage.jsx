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
import { Container } from '../../components/Layout/Container/Container';
import { useDispatch } from 'react-redux';
import { getPopularDrinks } from '../../redux/drinks/drinks.operations';
import { useEffect } from 'react';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from '../../redux/filters/filters.operations';

const AddDrinkPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularDrinks());
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getGlasses());
  }, [dispatch]);

  return (
    <Container>
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
              <SubTitle mb="28px">Popular Drinks</SubTitle>
              <PopularDrinks />
            </div>
          </SubContainer>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

export default AddDrinkPage;
