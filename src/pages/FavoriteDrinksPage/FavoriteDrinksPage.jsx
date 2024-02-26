import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/drinks/drinks.selectors';

import { useDrink } from '../../hooks/useDrink';
import { getFavoriteAll } from '../../redux/drinks/drinks.operations';
import { Container } from '../../components/Layout/Container/Container';
import { FavoriteDrinksWrapper } from './FavoriteDrinksPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import NotFoundDrinks from '../../components/NotFoundDrinks/NotFoundDrinks';
import { Paginator } from '../../components/Paginator/Paginator';
import { useMediaRules } from '../../hooks/useMediaRules';

export default function FavoriteDrinksPage() {
  const dispatch = useDispatch();
  const { total, favoriteDrinks } = useDrink();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasDrinks, setHasDrinks] = useState(false);
  const page = useSelector(selectPage);
  const { isDesktop } = useMediaRules();

  const onPageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    if (favoriteDrinks?.length === 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    }

    setHasDrinks(favoriteDrinks?.length > 0);
  }, [currentPage, favoriteDrinks]);

  useEffect(() => {
    dispatch(getFavoriteAll({ page: page, size: isDesktop ? 9 : 8 }))
      .unwrap()
      .catch((error) => console.log(error));
  }, [dispatch, page, isDesktop, total]);

  return (
    <Container>
      <FavoriteDrinksWrapper>
        <PageTitle title="Favorites" />
        {hasDrinks > 0 ? (
          <>
            <DrinksList
              favorite={true}
              drinksData={favoriteDrinks}
              onPageChange={onPageChange}
              currentPage={currentPage}
            />
            <Paginator />
          </>
        ) : (
          <NotFoundDrinks text="You haven't added any favorite cocktails yet" />
        )}
      </FavoriteDrinksWrapper>
    </Container>
  );
}
