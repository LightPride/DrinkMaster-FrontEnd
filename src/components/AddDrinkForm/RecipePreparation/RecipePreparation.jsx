import {
  Wrapper,
  SubtitleForm,
  TextAreaLabel,
} from './RecipePreparation.styled';

import { Field } from 'formik';

export const RecipePreparation = ({
  values,
  errors,
  handleChange,
  touched,
}) => {
  return (
    <Wrapper>
      <SubtitleForm>
        <h4>Recipe Preparation</h4>
      </SubtitleForm>
      <TextAreaLabel>
        <Field
          as="textarea"
          placeholder="Enter the recipe"
          name="instructions"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.instructions}
          className={`inputField ${
            errors.instructions && touched.instructions && 'inputFieldErr'
          }`}
        />
        {errors.instructions && touched.instructions && (
          <p className="errorInstructions">this field is mandatory</p>
        )}
      </TextAreaLabel>
    </Wrapper>
  );
};
