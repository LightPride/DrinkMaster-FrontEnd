import { Wrapper, SubtitleForm } from './RecipePreparation.styled';
import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const RecipePreparation = ({ values, errors, handleChange }) => {
  return (
    <Wrapper>
      <SubtitleForm>
        <h4>Recipe Preparation</h4>
      </SubtitleForm>

      <Field
        as="textarea"
        className="inputField"
        placeholder="Enter the recipe"
        name="instructions"
        onChange={(e) => {
          handleChange(e);
        }}
        value={values.instructions}
      />
    </Wrapper>
  );
};
