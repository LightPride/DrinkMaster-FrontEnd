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

const HomePage = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const dispatch = useDispatch();
  const drinks = useSelector(selectMainPageDrinks);
  const isLoadingFromRedux = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);

  const throttledRef = useRef(null);

  const showCocktails =
    !error && !isLoadingFromRedux && drinks && drinks.length > 0;

  let quantity = 1;
  if (deviceType === 'tablet') {
    quantity = 2;
  } else if (deviceType === 'desktop') {
    quantity = 3;
  }

  useEffect(() => {
    function handleWindowResize() {
      const newDeviceType = getDeviceType();
      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType);
      }
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [deviceType]);

  useEffect(() => {
    throttledRef.current = setTimeout(() => {
      dispatch(getMainPageDrinks(quantity));
      throttledRef.current = null;
    }, 1000);

    return () => clearTimeout(throttledRef.current);
  }, [dispatch, quantity]);

  function getDeviceType() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return 'mobile';
    } else if (window.matchMedia('(max-width: 1440px)').matches) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  return (
    <Container>
      <HomeWrapper>
        <HomePageHero />
        {isLoadingFromRedux && <Loader />}
        {showCocktails && <HomePageList quantity={quantity} />}
        {showCocktails && (
          <Link to={`/drinks`}>
            <OtherDrinksButton type="button">Other drinks</OtherDrinksButton>
          </Link>
        )}
      </HomeWrapper>
    </Container>
  );
};

export default HomePage;
