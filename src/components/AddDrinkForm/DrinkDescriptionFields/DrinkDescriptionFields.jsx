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

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectGlasses,
} from '../../../redux/filters/filters.selectors';
import { getCategories } from '../../../redux/filters/filters.operations';

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector(selectCategories());
  const glasses = useSelector(selectGlasses());

  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [glasseOptions, setGlassesOptions] = useState([]);

  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
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
        const glassesOptions = glasses.map((glasse) => ({
          value: glasse,
          label: glasse,
        }));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузці скла:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('drinkThumb', file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
  };

  const handleSelectCategoriesChange = (selectedOption) => {
    setSelectedCategoriesOption(selectedOption);
    setFieldValue(`category`, selectedOption.value);
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
              onChange={(e) => handleImageChange(e)}
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
                handleInputChange(e);
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
                handleDescriptionChange(e);
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
