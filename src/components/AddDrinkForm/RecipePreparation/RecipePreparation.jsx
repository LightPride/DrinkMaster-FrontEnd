import { Wrapper, SubtitleForm } from './RecipePreparation.styled';
import React from 'react';
import { Field, ErrorMessage } from 'formik';

export const RecipePreparation = () => {
  return (
    <Wrapper>
      <SubtitleForm>
        <h4>Recipe Preparation</h4>
      </SubtitleForm>

      <Field
        as="textarea"
        className="inputField"
        placeholder="Enter the recipe"
        name="preparation"
      />
    </Wrapper>
  );
};
