import { Wrapper, SubtitleForm, InputField } from './RecipePreparation.styled';

export const RecipePreparation = () => {
  return (
    <Wrapper>
      <SubtitleForm>
        <h4>Recipe Preparation</h4>
      </SubtitleForm>

      <InputField
        placeholder="Enter the recipe"
        name="ReciepePreparation"
      ></InputField>
    </Wrapper>
  );
};
