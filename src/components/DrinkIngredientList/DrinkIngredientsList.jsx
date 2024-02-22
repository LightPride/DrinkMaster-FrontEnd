import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';
// import { nanoid } from 'nanoid'; // тимчасове рішення, щоб не було warning

const DrinkIngredientsList = ({ ingredients }) => {
  // console.log(ingredients);
  // console.log(ingredients[0].ingredient.description);
  // console.log(ingredients[0].ingredient.ingredientThumb);
  return (
    <>
      {ingredients && (
        <>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {ingredients.map((ingredient) => (
              <li key={ingredient._id}>
                <DrinkIngredientItem
                  title={ingredient.title}
                  measure={ingredient.measure}
                  quantity={ingredient.quantity}
                  // image={ingredient.ingredient.ingredientThumb}
                />
              </li>
            ))}
          </IngredientsList>
        </>
      )}
    </>
  );
};

export default DrinkIngredientsList;
