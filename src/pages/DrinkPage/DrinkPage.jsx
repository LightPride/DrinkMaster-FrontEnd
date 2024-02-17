import { Container, DrinkPageWrapper } from './DrinkPage.styled';
// import { useEffect } from 'react';
import DrinkPageHero from '../../components/DrinkPageComponents/DrinkPageHero/DrinkPageHero';
// import DrinkIngredientsList from '../../components/DrinkPageComponents/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/DrinkPageComponents/RecipePreparation/RecipePreparation';
// import { getDrinkById } from '../../redux/drinks/drinks-operations'; /*-- ?? --*/
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectDrinkById } from '../../redux/drinks/drinks-selectors'; /*-- ?? --*/
// import { Container } from '../../components/Container/Container.styled';
// import { DrinkPageWrapper } from './DrinkPage.styled';

import drink from '../../data/drink.json';
// import ingredients from '../../../data/ingredients.json';
// import ingredients from 'data/ingredients.json';
// import recipes from '<data/recipes.json';

const DrinkPage = () => {
  // const dispatch = useDispatch();
  // const { drinkId } = useParams();
  // const drink = useSelector((state) => selectDrinkById(state, drinkId));

  // useEffect(() => {
  //   dispatch(getDrinkById(drinkId));
  // }, [dispatch, drinkId]);
  // console.log(drink[0].drink);
  // console.log(drink[0].glass);
  // console.log(drink[0].alcoholic);
  // console.log(drink[0].description);
  // console.log(drink[0].drinkThumb);
  return (
    <DrinkPageWrapper>
      <Container>
        <DrinkPageHero
          // id={drink._id}
          name={drink[0].drink}
          glass={drink[0].glass}
          alcoholic={drink[0].alcoholic}
          description={drink[0].description}
          imgPath={drink[0].drinkThumb}
        />
        <RecipePreparation instructions={drink[0].instructions} />
      </Container>
    </DrinkPageWrapper>
  );
};

export default DrinkPage;

/*----

import { useEffect } from 'react';
import { DrinkPageHero } from '../../components/DrinkPageHero/DrinkPageHero';
import { DrinkIngredientsList } from '../../components/DrinkIngredientsList/DrinkIngredientsList';
import { RecipePreparation } from '../../components/RecipePreparation/RecipePreparation';
import { getDrinkById } from '../../redux/drinks/drinks-operations';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectDrinkById } from '../../redux/drinks/drinks-selectors';
import { Container } from '../../components/Container/Container.styled';
import { DrinkPageWrapper } from './DrinkPage.styled';

export default function DrinkPage() {
  const dispatch = useDispatch();
  const { drinkId } = useParams();
  const drink = useSelector((state) => selectDrinkById(state, drinkId));

  useEffect(() => {
    dispatch(getDrinkById(drinkId));
  }, [dispatch, drinkId]);

  return (
    <DrinkPageWrapper>
      <Container>
        {drink && (
          <>
            <DrinkPageHero
              id={drink._id}
              name={drink.drink}
              glass={drink.glass}
              alcoholic={drink.alcoholic}
              description={drink.description}
              imgPath={drink.drinkThumb}
            />
            <DrinkIngredientsList ingredients={drink.ingredients} />
            <RecipePreparation instructions={drink.instructions} />
          </>
        )}
      </Container>
    </DrinkPageWrapper>
  );
}

----*/
