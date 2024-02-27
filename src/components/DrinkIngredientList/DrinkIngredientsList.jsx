import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';
import { nanoid } from 'nanoid';

const DrinkIngredientsList = ({ ingredients }) => {
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

              if (
                ingredient.ingredient &&
                ingredient.ingredient.ingredientThumb
              ) {
                images.ingredientThumb = ingredient.ingredient.ingredientThumb;
                images['thumb-medium'] = ingredient.ingredient['thumb-medium'];
                images['thumb-small'] = ingredient.ingredient['thumb-small'];
              }

              return (
                <li key={nanoid()}>
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
