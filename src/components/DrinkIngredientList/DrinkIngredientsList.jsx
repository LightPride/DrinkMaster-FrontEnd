import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';
import { nanoid } from 'nanoid';

const DrinkIngredientsList = ({ ingredients }) => {
  // console.log(ingredients);
  // console.log(ingredients[0].ingredient.ingredientThumb);
  return (
    <>
      {ingredients && (
        <>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsList>
            {ingredients.map((ingredient) => {
              const images = {
                ingredientThumb: '',
                ['thumb-medium']: '',
                ['thumb-small']: '',
              };
              // console.log(images);
              if (
                ingredient.ingredient &&
                ingredient.ingredient.ingredientThumb
              ) {
                images.ingredientThumb = ingredient.ingredient.ingredientThumb;
                images['thumb-medium'] = ingredient.ingredient['thumb-medium'];
                images['thumb-small'] = ingredient.ingredient['thumb-small'];
              }
              // console.log(images);
              return (
                <li key={nanoid()}>
                  {/* // <li key={ingredient.ingredient && ingredient.ingredient._id}> */}
                  <DrinkIngredientItem
                    title={ingredient.title}
                    measure={ingredient.measure}
                    quantity={ingredient.quantity}
                    images={images}
                  />
                </li>
              );
            })}
          </IngredientsList>
        </>
      )}
    </>
  );
};

export default DrinkIngredientsList;
