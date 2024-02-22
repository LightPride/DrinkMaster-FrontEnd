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
import categories from '../../../helpers/data/categories';
import glasses from '../../../helpers/data/glasses';

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

  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);

  const userNoAdult = false;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryOptions = categories.map((category) => ({
          value: category.categori,
          label: category.categori,
        }));

        setCategoriesOptions(categoryOptions);
      } catch (error) {
        console.error('Помилка:', error);
      }
    }
    async function fetchGlasses() {
      try {
        const glassesOptions = glasses.map((glasse) => ({
          value: glasse.glass,
          label: glasse.glass,
        }));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузці скла:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, []);

  const handleSelectCategoriesChange = (selectedOption) => {
    setSelectedCategoriesOption(selectedOption);
    setFieldValue(`category`, selectedOption.value);
  };
  const handleSelectGlassesChange = (selectedOption) => {
    setSelectedGlassesOption(selectedOption);
    setFieldValue(`glass`, selectedOption.value);
  };
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
              // onChange - ??
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
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="styledDivInput">
            <Field
              className="styledInputText"
              placeholder="Enter item title"
              id="description"
              name="description"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="styledDivInput">
            <label className="labelSelect">
              <p className="labelTitle">Category</p>
              <Select
                className="selectStyled"
                name="category"
                options={categoryOptions}
                value={selectedCategoriesOption}
                onChange={(selectedCategoriesOption) =>
                  handleSelectCategoriesChange(selectedCategoriesOption)
                }
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
                value={selectedGlassesOption}
                onChange={(selectedGlassesOption) =>
                  handleSelectGlassesChange(selectedGlassesOption)
                }
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
              onChange={handleChange}
              disabled={userNoAdult}
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
              onChange={handleChange}
            />
            <span className="styledSpan">Non-alcoholic</span>
          </label>
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
