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
// import recipes from '../../helpers/data/recipes.json';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  // console.log(drinkId);
  const drink = useSelector((state) => selectDrinkById(state, drinkId));
  console.log(drink);

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <Container>
      <DrinkPageWrapper>
        {drink && (
          <>
            <DrinkPageHero
              // id={recipes[0]._id}
              name={drink.drink}
              // name={recipes[0].drink}
              glass={drink.glass}
              // glass={recipes[0].glass}
              alcoholic={drink.alcoholic}
              // alcoholic={recipes[0].alcoholic}
              description={drink.description}
              // description={recipes[0].description}
              imgPath={drink.drinkThumb}
              // imgPath={recipes[0].drinkThumb}
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
