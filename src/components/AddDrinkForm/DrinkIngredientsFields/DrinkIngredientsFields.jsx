import {
  SubtitleForm,
  Wrapper,
  InputsField,
} from './DrinkIngredientsFields.styled';

export const DrinkIngredientsFields = () => {
  return (
    <Wrapper>
      <SubtitleForm>Ingredients</SubtitleForm>

      <InputsField>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </InputsField>
    </Wrapper>
  );
};
