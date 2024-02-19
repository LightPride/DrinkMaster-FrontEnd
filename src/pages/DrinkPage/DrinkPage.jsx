import { DrinkPageWrapper } from './DrinkPage.styled';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';

import recipes from '../../helpers/data/recipes.json';
import { useParams } from 'react-router-dom';
import { getDrinkById } from '../../redux/drinks/drinks.operations';
import { selectDrinkById } from '../../redux/drinks/drinks.selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import ingredients from '../../helpers/data/ingredients.json';

const DrinkPage = () => {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  console.log(drinkId);
  const drink = useSelector((state) => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);
  console.log(drink);

  return (
    <DrinkPageWrapper>
      <DrinkPageHero
        id={recipes._id}
        name={recipes[0].drink}
        glass={recipes[0].glass}
        alcoholic={recipes[0].alcoholic}
        description={recipes[0].description}
        imgPath={recipes[0].drinkThumb}
      />
      <DrinkIngredientsList ingredients={recipes[0].ingredients} />
      <RecipePreparation instructions={recipes[0].instructions} />
    </DrinkPageWrapper>
  );
};

export default DrinkPage;
