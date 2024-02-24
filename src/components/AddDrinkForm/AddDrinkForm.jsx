import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik'; // Змінив імпорт
import * as Yup from 'yup';

import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useDispatch } from 'react-redux';

export const AddDrinkForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        drink: '',
        ingredients: [{ title: '', measure: '' }],
        instructions: '',
        category: '',
        glass: '',
        alcoholic: 'Non alcoholic',
        shortDescription: '',
      }}
      validationSchema={Yup.object().shape({
        drink: Yup.string().required('This field is mandatory'),
        shortDescription: Yup.string().required('This field is mandatory'),
        ingredients: Yup.array().required('This field is mandatory'),
        instructions: Yup.string().required('This field is mandatory'),
        instructions: Yup.string().required('This field is mandatory'),
        category: Yup.string().required('This field is mandatory'),
        glass: Yup.string().required('This field is mandatory'),
        alcoholic: Yup.string().required('Select the type of cocktail'),
        drinkThumb: Yup.mixed().required('Select image please'),
      })}
      onSubmit={async (values) => {
        const formData = new FormData();
        formData.append('drink', values.drink);
        formData.append('category', values.category);
        formData.append('shortDescription', values.shortDescription);
        formData.append('alcoholic', values.alcoholic);
        formData.append('instructions', values.instructions);
        formData.append('glass', values.glass);
        formData.append('drinkThumb', values.drinkThumb);

        const ingredientsStr = JSON.stringify(values.ingredients);
        formData.append('ingredients', ingredientsStr);

        try {
          console.log(values);
          // dispatch  додавання коктейлю.
        } catch (error) {
          console.error('Error:', error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Form>
          <Wrapper>
            <DrinkDescriptionFields
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />
            <DrinkIngredientsFields
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />
            <RecipePreparation
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <button className="buttonAdd" type="submit">
              Add
            </button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};
