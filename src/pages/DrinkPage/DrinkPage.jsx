import { Container, DrinkPageWrapper } from './DrinkPage.styled';
import DrinkPageHero from '../../components/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { Container } from '../../components/Container/Container.styled';

// import drink from '../../data/drink.json';
import recipes from '../../helpers/data/recipes.json';
// import ingredients from '../../data/ingredients.json';
// import ingredients from '../../helpers/data/recipes.json';

const DrinkPage = () => {
  // console.log(drink[0].drink);
  // console.log(drink[0].glass);
  // console.log(drink[0].alcoholic);
  // console.log(drink[0].description);
  // console.log(drink[0].drinkThumb);
  // console.log(ingredients[0].title);
  return (
    <DrinkPageWrapper>
      <Container>
        <DrinkPageHero
          // id={drink._id}
          name={recipes[0].drink}
          glass={recipes[0].glass}
          alcoholic={recipes[0].alcoholic}
          description={recipes[0].description}
          imgPath={recipes[0].drinkThumb}
        />
        <DrinkIngredientsList ingredients={recipes[0].ingredients} />
        <RecipePreparation instructions={recipes[0].instructions} />
      </Container>
    </DrinkPageWrapper>
  );
};

export default DrinkPage;
