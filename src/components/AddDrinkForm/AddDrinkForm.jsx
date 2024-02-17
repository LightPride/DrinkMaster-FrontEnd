import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescription.fields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';

export const AddDrinkForm = () => {
  return (
    <Wrapper>
      <DrinkDescriptionFields />
      <DrinkIngredientsFields />
      <RecipePreparation />
    </Wrapper>
  );
};
