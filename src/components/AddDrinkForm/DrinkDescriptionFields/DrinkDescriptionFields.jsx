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
import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectGlasses,
} from '../../../redux/filters/filters.selectors';
import { selectUser } from '../../../redux/auth/auth.selectors';
function getUserAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const categories = useSelector(selectCategories);
  const glasses = useSelector(selectGlasses);
  const userData = useSelector(selectUser);

  const [selectedImage, setSelectedImage] = useState(null); //

  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [glasseOptions, setGlassesOptions] = useState([]);

  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);

  const userNoAdult = getUserAge(userData.dateOfBirth) < 18 ? true : false;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryOptions = categories.map(({ category }) => ({
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
        const glassesOptions = glasses.map(({ glass }) => ({
          value: glass,
          label: glass,
        }));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузці скла:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, [categories, glasses]);

  const handleSelectCategoriesChange = (selectedOption) => {
    setSelectedCategoriesOption(selectedOption);
    setFieldValue(`category`, selectedOption.value);
  };
  const handleSelectGlassesChange = (selectedOption) => {
    setSelectedGlassesOption(selectedOption);
    setFieldValue(`glass`, selectedOption.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('drinkThumb', file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <Wrapper>
      <AddImageField>
        {selectedImage ? (
          <label className="labelPhoto">
            <input
              style={{ display: 'none' }}
              id="drinkThumb"
              type="file"
              name="drinkThumb"
              accept="drinkThumb/*"
              onChange={(e) => handleImageChange(e)}
            />
            <img className="labelPhoto" src={selectedImage} alt="Selected" />
          </label>
        ) : (
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
              <input
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
        )}
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
              id="shortDescription"
              name="shortDescription"
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
              value="Alcoholic"
              checked={values.alcoholic === 'Alcoholic'}
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
              value="Non alcoholic"
              checked={values.alcoholic === 'Non alcoholic'}
              onChange={handleChange}
            />
            <span className="styledSpan">Non-alcoholic</span>
          </label>
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
