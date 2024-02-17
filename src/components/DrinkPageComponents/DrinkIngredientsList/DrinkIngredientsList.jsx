import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';

// import drink from '../../../data/drink.json';
// import ingredients from '../../../data/ingredients.json';

const DrinkIngredientsList = ({ ingredients }) => {
  return (
    <>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <DrinkIngredientItem
              title={ingredient.title}
              measure={ingredient.measure}
              quantity={ingredient.quantity}
              images={ingredient.ingredientThumb}
            />
          </li>
        ))}
      </IngredientsList>
    </>
  );
};

export default DrinkIngredientsList;
