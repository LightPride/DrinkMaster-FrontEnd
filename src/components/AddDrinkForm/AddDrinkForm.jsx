import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescription.fields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';

export const AddDrinkForm = () => {
  return (
    <>
      <DrinkDescriptionFields />
      <DrinkIngredientsFields />
      <RecipePreparation />
    </>
  );
};
