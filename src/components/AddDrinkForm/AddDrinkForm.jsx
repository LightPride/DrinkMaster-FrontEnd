import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescription.fields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';

export const AddDrinkForm = () => {
  return (
    <>
      <form action="">
        <Wrapper>
          <DrinkDescriptionFields />
          <DrinkIngredientsFields />
          <RecipePreparation />
        </Wrapper>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
