import {
  SubtitleForm,
  Wrapper,
  SubWrapper,
  IngredientsButton,
  customStylesSelectIngr,
} from './DrinkIngredientsFields.styled';
import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import Select from 'react-select';

export const DrinkIngredientsFields = ({ ingredients }) => {
  return (
    <FieldArray name="ingredients">
      {({ push, remove, form }) => (
        <Wrapper>
          <SubtitleForm>
            <h4 className="titleIngredientsForm">Ingredients</h4>
            <div className="containerIngredientInputs">
              <IngredientsButton
                className="buttonAddRemove"
                onClick={() => remove(-1)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 8H13.5"
                    stroke="#F3F3F3"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IngredientsButton>
              <p className="quantityTitle">{form.values.ingredients.length}</p>
              <IngredientsButton
                type="button"
                onClick={() => push({ name: '', quantity: '' })}
                className="buttonAddRemove"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 8H13.5"
                    stroke="#F3F3F3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2.5V13.5"
                    stroke="#F3F3F3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IngredientsButton>
            </div>
          </SubtitleForm>

          <SubWrapper>
            {form.values.ingredients.map((ingredient, index) => (
              <div className="inputsWrapper" key={index}>
                <Select
                  className="styledSelect"
                  name={`ingredients.${index}.name`}
                  options={[ingredient]}
                  onChange={(option) =>
                    form.setFieldValue(`ingredients.${index}.name`, option)
                  }
                  styles={customStylesSelectIngr}
                />
                <Field
                  className="styledInput"
                  name={`ingredients.${index}.quantity`}
                  type="text"
                  placeholder="1 Cl"
                />
                <IngredientsButton type="button" onClick={() => remove(index)}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0625 3.9375L3.9375 14.0625"
                      stroke="#F3F3F3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0625 14.0625L3.9375 3.9375"
                      stroke="#F3F3F3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IngredientsButton>
              </div>
            ))}
          </SubWrapper>
        </Wrapper>
      )}
    </FieldArray>
  );
};
