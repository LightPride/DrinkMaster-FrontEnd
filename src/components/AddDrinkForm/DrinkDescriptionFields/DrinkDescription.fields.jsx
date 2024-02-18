import {
  AddImageField,
  Wrapper,
  InputsDescrField,
  DescrField,
  DivAlcoholic,
} from './DrinkDescriptionFields';

export const DrinkDescriptionFields = () => {
  return (
    <Wrapper>
      <AddImageField></AddImageField>
      <DescrField>
        <InputsDescrField>
          <input type="text" name="itemTitle" />
          <input type="text" name="aboutRecipe" />
          <select name="category"></select>
          <select name="glass"></select>
        </InputsDescrField>
        <DivAlcoholic>
          <input type="radio" />
          <input type="radio" />
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
