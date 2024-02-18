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
          <input type="text" />
          <input type="text" />
          <select name=""></select>
          <select name=""></select>
        </InputsDescrField>
        <DivAlcoholic>
          <input type="radio" />
          <input type="radio" />
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
