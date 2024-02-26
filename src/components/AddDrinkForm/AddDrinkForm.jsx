import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik'; // Змінив імпорт
import * as Yup from 'yup';

import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useDispatch } from 'react-redux';
import { addOwnDrink } from '../../redux/drinks/drinks.operations';
import Notiflix, { Loading } from 'notiflix';
import { useNavigate } from 'react-router-dom';

export const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const redirect = useNavigate();

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

        instructions: Yup.string().required('This field is mandatory'),
        category: Yup.string().required('This field is mandatory'),
        glass: Yup.string().required('This field is mandatory'),
        alcoholic: Yup.string().required('Select the type of cocktail'),
        drinkThumb: Yup.mixed().required('Select image please'),

        // ingredients: Yup.array().required('This field is mandatory'),
        ingredients: Yup.array()
          .of(
            Yup.object().shape({
              title: Yup.string().required('Ingredient title is required'),
              measure: Yup.string().required('Ingredient measure is required'),
            })
          )
          .required('At least one ingredient is required'),
      })}
      onSubmit={async (values) => {
        setIsLoading(true);

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
          const resp = await dispatch(addOwnDrink(formData));

          if (resp.meta.requestStatus === 'fulfilled') {
            Notiflix.Notify.success(
              resp.payload.message + ' ,name: ' + resp.payload.newDrink.drink
            );
            Notiflix.Notify.info(
              'in 5 seconds you will be redirected to the page with your cocktails'
            );
            setTimeout(() => {
              setIsLoading(false);
              redirect('/my');
            }, 4000);
          } else {
            Notiflix.Notify.failure(resp.payload.message);
          }
        } catch (error) {
          Notiflix.Notify.failure(error);

          console.error('Error:', error);
          setIsLoading(false);
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

            <button className="buttonAdd" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Add'}
            </button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};
