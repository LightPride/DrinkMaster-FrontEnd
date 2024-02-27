import { Container } from '../../components/Layout/Container/Container';
import { DrinkPageWrapper } from './DrinkPage.styled';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { useParams } from 'react-router-dom';
import { getDrinkById } from '../../redux/drinks/drinks.operations';
import { selectDrinkById } from '../../redux/drinks/drinks.selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector((state) => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <DrinkPageWrapper>
        {drink && (
          <>
            <DrinkPageHero
              id={drink._id}
              name={drink.drink}
              glass={drink.glass}
              alcoholic={drink.alcoholic}
              description={drink.description}
              imgPath={drink.drinkThumb}
              isFavorite={drink.isFavoriteByUser}
            />
            <DrinkIngredientsList ingredients={drink.ingredients} />
            <RecipePreparation instructions={drink.instructions} />
          </>
        )}
      </DrinkPageWrapper>
    </Container>
  );
};

export default DrinkPage;
