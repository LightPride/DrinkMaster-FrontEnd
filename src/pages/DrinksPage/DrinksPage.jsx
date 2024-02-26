// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';
import { Container } from '../../components/Layout/Container/Container';
import { ErrorMessage } from './DrinksPage.styled';
import { Wrapper } from './DrinksPage.styled';
import Loader from '../../ui/Loader';
import { Paginator } from '../../components/Paginator/Paginator';
// import { useMediaRules } from '../../hooks/useMediaRules';
// import { getSearchedDrink } from '../../redux/drinks/drinks.operations';

import {
  selectDrinks,
  selectIsLoading,
  selectErrorDrinks,
} from '../../redux/drinks/drinks.selectors';
// import { selectPage } from '../../redux/drinks/drinks.selectors';

export default function DrinksPage() {
  // const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrorDrinks);
  // const page = useSelector(selectPage);
  // console.log(page);
  // const search = useSelector(selectSearch);
  // const size = isDesktop ? 9 : 8;

  /////////////////////////
  // useEffect(() => {
  //   dispatch(
  //     getSearchedDrink({
  //       name: '',
  //       category: '',
  //       ingredient: '',
  //       page: page,
  //       // size: isDesktop ? 9 : 8,
  //     })
  //   );
  // }, [dispatch, page]);

  /////////////////////////

  return (
    <Container>
      <Wrapper>
        <PageTitle title="Drinks" />
        <DrinksSearch />
        {isLoading ? (
          <Loader />
        ) : error || drinks.length === 0 ? (
          <ErrorMessage>No cocktails were found for your request</ErrorMessage>
        ) : (
          <>
            <Drinks drinks={drinks} />
            <Paginator />
          </>
        )}
      </Wrapper>
    </Container>
  );
}
