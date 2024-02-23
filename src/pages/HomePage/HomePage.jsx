import {  HomeWrapper, OtherDrinksButton } from './HomePage.styled';
import HomePageHero from '../../components/HomePageHero/HomePageHero';
import { Container } from '../../components/Layout/Container/Container'
import { useDispatch, useSelector } from 'react-redux';
import { selectMainPageDrinks, selectIsLoading,selectErrorDrinks} from '../../redux/drinks/drinks.selectors';
import { useEffect } from 'react';
import { getMainPageDrinks } from '../../redux/drinks/drinks.operations';
import HomePageList from '../../components/HomePageList/HomePageList';


const HomePage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectMainPageDrinks);
  const isLoadingFromRedux = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);

  const showCocktails=
  !error && !isLoadingFromRedux && drinks && drinks.length > 0;

useEffect(() => {
  dispatch(getMainPageDrinks())
}, [dispatch]);


  return (
   <HomeWrapper>
    <Container>
      <HomePageHero/>
      {error !== null && <p className="error-bage">{error}</p>}
      <div>{isLoadingFromRedux && 'Request in progress...'}</div>
      {showCocktails && <HomePageList />}
      <OtherDrinksButton>Other drinks</OtherDrinksButton>
    </Container>
   </HomeWrapper>
  );
};

export default HomePage;
