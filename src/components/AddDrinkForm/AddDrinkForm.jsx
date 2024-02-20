import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';

export const AddDrinkForm = ({ categories, servings, ingredients }) => {
  const validationSchema = Yup.object().shape({
    photo: Yup.string().required("Фото коктейлю обов'язкове"),
    name: Yup.string().required("Назва коктейлю обов'язкова"),
    description: Yup.string().required("Опис коктейлю обов'язковий"),
    category: Yup.string().required("Категорія коктейлю обов'язкова"),
    serving: Yup.string().required("Тип сервірування обов'язковий"),
    alcoholic: Yup.string().required('Вкажіть чи є коктейль алкогольним чи ні'),
    ingredients: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Назва інгредієнту обов'язкова"),
        quantity: Yup.string().required("Кількість інгредієнту обов'язкова"),
        unit: Yup.string().required("Одиниця виміру інгредієнту обов'язкова"),
      })
    ),
    preparation: Yup.string().required("Інструкція приготування обов'язкова"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    //  логіка для відправки даних на сервер
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          photo: '',
          name: '',
          description: '',
          category: '',
          serving: '',
          alcoholic: '',
          ingredients: [{ name: '', quantity: '', unit: '' }],
          preparation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Wrapper>
              <DrinkDescriptionFields
                categories={categories}
                servings={servings}
              />
              <DrinkIngredientsFields ingredients={ingredients} />
              <RecipePreparation />

              <button
                className="buttonAdd"
                type="submit"
                disabled={isSubmitting}
              >
                Add
              </button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
