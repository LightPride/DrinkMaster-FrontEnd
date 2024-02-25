import { HomeWrapper, OtherDrinksButton } from './HomePage.styled';
import HomePageHero from '../../components/HomePageHero/HomePageHero';
import { Container } from '../../components/Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMainPageDrinks,
  selectIsLoading,
  selectErrorDrinks,
} from '../../redux/drinks/drinks.selectors';
import { useEffect, useRef, useState } from 'react';
import { getMainPageDrinks } from '../../redux/drinks/drinks.operations';
import HomePageList from '../../components/HomePageList/HomePageList';
import Loader from '../../ui/Loader';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../DrinksPage/DrinksPage.styled';

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const drinks = useSelector(selectMainPageDrinks);
  const isLoadingFromRedux = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);

  const showCocktails =
    !error && !isLoadingFromRedux && drinks && drinks.length > 0;

  // const handleWindowResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // /*функція для рендерингу на три екрани*/
  // const setQuantity = (windowWidth) => {
  //   let quantity = 0;
  //   if (windowWidth < 768) {
  //     quantity = 1;
  //   } else if (windowWidth >= 768 && windowWidth < 1440) {
  //     quantity = 2;
  //   } else if (windowWidth >= 1440) {
  //     quantity = 3;
  //   }
  //   return quantity;
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize);
  //   const quantity = setQuantity(windowWidth);

  //   dispatch(getMainPageDrinks(quantity));
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, [dispatch, windowWidth]);


  /* новий код **/
  
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const setQuantity = (windowWidth) => {
    let quantity = 0;
    if (windowWidth < 768) {
      quantity = 1;
    } else if (windowWidth >= 768 && windowWidth < 1440) {
      quantity = 2;
    } else if (windowWidth >= 1440) {
      quantity = 3;
    }
    return quantity;
  };

  const throttledRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // if (throttledRef.current) return;

    throttledRef.current = setTimeout(() => {
      const quantity = setQuantity(windowWidth);
      dispatch(getMainPageDrinks(quantity));
      throttledRef.current = null;
    }, 1000);

    return () => clearTimeout(throttledRef.current);
  }, [dispatch, windowWidth]);

  return (
    <Container>
      <HomeWrapper>
        <HomePageHero />
        {error !== null && <ErrorMessage>{error}</ErrorMessage>}
        {isLoadingFromRedux && <Loader />}
        {showCocktails && <HomePageList />}
        <Link to={`/drinks`}>
          <OtherDrinksButton type="button">Other drinks</OtherDrinksButton>
        </Link>
      </HomeWrapper>
    </Container>
  );
};

export default HomePage;
