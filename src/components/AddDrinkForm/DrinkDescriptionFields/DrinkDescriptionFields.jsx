import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { useState, useEffect } from 'react';

import {
  AddImageField,
  Wrapper,
  InputsDescrField,
  DescrField,
  DivAlcoholic,
  WrapperAddDiv,
  LabelAdd,
  customStylesSelect,
} from './DrinkDescriptionFields.styled';
import {
  getCategories,
  getGlasses,
} from '../../../redux/filters/filters.operations';

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [glasseOptions, setGlassesOptions] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategories();
        const categoryOptions = categories.map((category) => ({
          value: category,
          label: category,
        }));

        setCategoriesOptions(categoryOptions);
      } catch (error) {
        console.error('Помилка:', error);
      }
    }
    async function fetchGlasses() {
      try {
        const glasses = await getGlasses();
        const glassesOptions = glasses.map((glasse) => ({
          value: glasse,
          label: glasse,
        }));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, []);
  return (
    <Wrapper>
      <AddImageField>
        <WrapperAddDiv>
          <LabelAdd>
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 5.8335V22.1668"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.33203 14H22.6654"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Field
              style={{ display: 'none' }}
              id="drinkThumb"
              type="file"
              name="drinkThumb"
              accept="drinkThumb/*"
            />
          </LabelAdd>
          <p>Add Image</p>
        </WrapperAddDiv>
      </AddImageField>
      <DescrField>
        <InputsDescrField>
          <div className="styledDivInput">
            <Field
              className="styledInputText"
              placeholder="Enter item title"
              type="text"
              id="drink"
              name="drink"
            />
          </div>
          <div className="styledDivInput">
            <Field
              className="styledInputText"
              placeholder="Enter item title"
              id="description"
              name="description"
            />
          </div>
          <div className="styledDivInput">
            <label className="labelSelect">
              <p className="labelTitle">Category</p>
              <Select
                className="selectStyled"
                name="category"
                options={categoryOptions}
                styles={customStylesSelect}
              />
            </label>
          </div>
          <div className="styledDivInput">
            <label className="labelSelect">
              <p className="labelTitle">Glass</p>
              <Select
                className="selectStyled"
                name="glass"
                options={glasseOptions}
                styles={customStylesSelect}
              />
            </label>
          </div>
        </InputsDescrField>
        <DivAlcoholic>
          <label className="radioLabel">
            <Field
              className="styledRadio"
              type="radio"
              name="alcoholic"
              value="true"
              checked={values.alcoholic === 'true'}
            />
            <span className="styledSpan">Alcoholic</span>
          </label>

          <label className="radioLabel">
            <Field
              className="styledRadio"
              type="radio"
              name="alcoholic"
              value="false"
              checked={values.alcoholic === 'false'}
            />
            <span className="styledSpan">Non-alcoholic</span>
          </label>
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
