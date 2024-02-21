import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useDispatch } from 'react-redux';

export const AddDrinkForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      drink: '',
      ingredients: [{ title: '' }],
      instructions: '',
      category: '',
      glass: '',
      alcoholic: 'Non alcoholic',
      description: '',
    },
    validationSchema: Yup.object().shape({
      drink: Yup.string().required('This field is mandatory'),
      description: Yup.string().required('This field is mandatory'),
      ingredients: Yup.array().required('This field is mandatory'),
      instructions: Yup.string().required('This field is mandatory'),
      category: Yup.string().required('This field is mandatory'),
      glass: Yup.string().required('This field is mandatory'),
      alcoholic: Yup.string().required('Select the type of cocktail'),
      drinkThumb: Yup.mixed(),
    }),
    handleSubmit: async (values) => {
      const formData = new FormData();
      formData.append('drink', values.drink);
      formData.append('category', values.category);
      formData.append('description', values.description);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instructions', values.instructions);
      formData.append('glass', values.glass);

      formData.append('drinkThumb', values.drinkThumb);

      const ingredientsStr = JSON.stringify(values.ingredients);
      formData.append('ingredients', ingredientsStr);

      try {
        console.log(formData);
        // dispatch  додавання коктейлю.
      } catch (error) {}
    },
  });

  return (
    <>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <Wrapper>
            <DrinkDescriptionFields
              values={formik.values}
              errors={formik.errors}
              touched={formik.touched}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              setFieldValue={formik.setFieldValue}
            />
            <DrinkIngredientsFields
              values={formik.values}
              errors={formik.errors}
              touched={formik.touched}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              setFieldValue={formik.setFieldValue}
            />
            <RecipePreparation
              values={formik.values}
              errors={formik.errors}
              touched={formik.touched}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />

            <button className="buttonAdd" type="submit">
              Add
            </button>
          </Wrapper>
        </form>
      </Formik>
    </>
  );
};
