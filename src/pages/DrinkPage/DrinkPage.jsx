import { Container, DrinkPageWrapper } from './DrinkPage.styled';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { Container } from '../../components/Container/Container.styled';
// import { DrinkPageWrapper } from './DrinkPage.styled';

import drink from '../../data/drink.json';
import ingredients from '../../data/ingredients.json';
// import recipes from '<data/recipes.json';

const DrinkPage = () => {
  // console.log(drink[0].drink);
  // console.log(drink[0].glass);
  // console.log(drink[0].alcoholic);
  // console.log(drink[0].description);
  // console.log(drink[0].drinkThumb);
  console.log(ingredients[0].title);
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
        <DrinkIngredientsList ingredients={ingredients} />
        <RecipePreparation instructions={drink[0].instructions} />
      </Container>
    </DrinkPageWrapper>
  );
};

export default DrinkPage;
