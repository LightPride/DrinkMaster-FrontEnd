import {
  SubtitleForm,
  Wrapper,
  SubWrapper,
  IngredientsButton,
  customStylesSelectIngr,
} from './DrinkIngredientsFields.styled';
import React, { useEffect, useState } from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { selectIngredients } from '../../../redux/filters/filters.selectors';
// import ingredientsArray from '../../../helpers/data/ingredients.json';

export const DrinkIngredientsFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const ingredientsArray = useSelector(selectIngredients);

  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const filteredIngredientsArray =
          values.alcoholic === 'Non alcoholic'
            ? ingredientsArray.filter(
                (ingredient) => ingredient.alcohol !== 'Yes'
              )
            : ingredientsArray;
        const ingredientOptions = filteredIngredientsArray.map(
          ({ title, _id: ingredientsId }) => ({
            label: title,
            value: ingredientsId,
          })
        );
        setOptions(ingredientOptions);
      } catch (error) {
        console.error('Помилка при завантаженні інгрідієнтів:', error);
      }
    }

    fetchIngredients();
  }, [values.alcoholic, ingredientsArray]);

  const handleSelectChange = (selectedOption, index) => {
    const { value, label } = selectedOption;
    setFieldValue(`ingredients[${index}].title`, label);
    setFieldValue(`ingredients[${index}].ingredientsId`, value);
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = selectedOption;
      return newOptions;
    });
  };

  const handleAddIngredient = () => {
    const newIngredient = { title: '', measure: '' };
    setFieldValue('ingredients', [...values.ingredients, newIngredient]);
    setSelectedOptions((prevOptions) => [...prevOptions, null]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setFieldValue('ingredients', newIngredients);
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions.splice(index, 1);
      return newOptions;
    });
  };

  const isRemoveButtonDisabled = values.ingredients.length === 1;

  return (
    <Wrapper>
      <SubtitleForm>
        <h4 className="titleIngredientsForm">Ingredients</h4>
        <div className="containerIngredientInputs">
          <IngredientsButton
            className="buttonAddRemove"
            type="button"
            onClick={() =>
              handleRemoveIngredient(values.ingredients.length - 1)
            }
            disabled={isRemoveButtonDisabled}
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
          <p className="quantityTitle">{values.ingredients.length}</p>
          <IngredientsButton
            type="button"
            onClick={handleAddIngredient}
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
        {values.ingredients.map((ingredient, index) => (
          <div className="inputsWrapper" key={index}>
            <Select
              className="styledSelect"
              name={`ingredients[${index}].title`}
              options={options}
              value={selectedOptions[index]}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, index)
              }
              onBlur={handleBlur}
              styles={customStylesSelectIngr}
            />
            <Field
              className="styledInput"
              type="text"
              name={`ingredients[${index}].measure`}
              placeholder="1 cl"
              value={ingredient.measure || ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <IngredientsButton
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              disabled={isRemoveButtonDisabled}
            >
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
  );
};
