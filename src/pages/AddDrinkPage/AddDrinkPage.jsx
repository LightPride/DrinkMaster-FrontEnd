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
import { useEffect, useState } from 'react';

const AddDrinkPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularDrinks());
  }, [dispatch]);

  const [dataDrinkFromOtherComponent, setValueFromOtherComponent] =
    useState('');

  const addOtherDrinkDataToState = setValueFromOtherComponent;

  return (
    <Container>
      <Wrapper>
        <PageTitle title="Add drink" />
        <FlexContainer>
          <AddDrinkForm
            dataDrinkFromOtherComponent={dataDrinkFromOtherComponent}
          />
          <SubContainer>
            <div>
              <SubTitle mb="20px">Follow Us</SubTitle>
              <FollowUs />
            </div>
            <div>
              <SubTitle mb="28px">Popular Drinks</SubTitle>
              <PopularDrinks addTest={addOtherDrinkDataToState} />
            </div>
          </SubContainer>
        </FlexContainer>
      </Wrapper>
    </Container>
  );
};

export default AddDrinkPage;
