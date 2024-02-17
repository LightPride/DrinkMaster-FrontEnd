import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';

const DrinkIngredientsList = ({ ingredients }) => {
  return (
    <>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>
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
