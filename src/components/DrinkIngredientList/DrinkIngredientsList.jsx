import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';
import { nanoid } from 'nanoid'; // тимчасове рішення, щоб не було warning

const DrinkIngredientsList = ({ ingredients }) => {
  return (
    <>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>
        {ingredients.map((ingredient) => (
          <li key={nanoid()}>
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
