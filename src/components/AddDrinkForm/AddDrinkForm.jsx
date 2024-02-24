import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik'; // Змінив імпорт
import * as Yup from 'yup';

import { Wrapper } from './AddDrinkForm.styled';
import { DrinkDescriptionFields } from './DrinkDescriptionFields/DrinkDescriptionFields';
import { DrinkIngredientsFields } from './DrinkIngredientsFields/DrinkIngredientsFields';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useDispatch } from 'react-redux';

export const AddDrinkForm = ({ dataDrinkFromOtherComponent }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        drink: '',
        ingredients: [{ title: '' }],
        instructions: '',
        category: '',
        glass: '',
        alcoholic: 'Non alcoholic',
        shortDescription: '',
        drinkThumb: '',
      }}
      validationSchema={Yup.object().shape({
        drink: Yup.string().required('This field is mandatory'),
        shortDescription: Yup.string().required('This field is mandatory'),
        ingredients: Yup.array().required('This field is mandatory'),
        instructions: Yup.string().required('This field is mandatory'),
        category: Yup.string().required('This field is mandatory'),
        glass: Yup.string().required('This field is mandatory'),
        alcoholic: Yup.string().required('Select the type of cocktail'),
        drinkThumb: Yup.mixed(),
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
        setFieldValue, // Отримання методу setFieldValue
      }) => {
        useEffect(() => {
          // Оновлення значень форми при зміні dataDrinkFromOtherComponent
          setFieldValue('drink', dataDrinkFromOtherComponent.drink || '');
          // setFieldValue(
          //   'ingredients',
          //   dataDrinkFromOtherComponent.ingredients || [{ title: '' }]
          // );
          setFieldValue(
            'instructions',
            dataDrinkFromOtherComponent.instructions || ''
          );
          // setFieldValue('category', dataDrinkFromOtherComponent.category || '');
          // setFieldValue('glass', dataDrinkFromOtherComponent.glass || '');
          setFieldValue(
            'alcoholic',
            dataDrinkFromOtherComponent.alcoholic || 'Non alcoholic'
          );
          setFieldValue(
            'shortDescription',
            dataDrinkFromOtherComponent.shortDescription || ''
          );
          setFieldValue(
            'drinkThumb',
            dataDrinkFromOtherComponent.drinkThumb || ''
          );
        }, [dataDrinkFromOtherComponent]);

        return (
          <Form>
            <Wrapper>
              <DrinkDescriptionFields
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                categoryFromOtherDrink={
                  dataDrinkFromOtherComponent.category || false
                }
                glassFromOtherDrink={dataDrinkFromOtherComponent.glass || false}
              />
              <DrinkIngredientsFields
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                ingredientsFromOtherDrink={
                  dataDrinkFromOtherComponent.ingredients || false
                }
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
        );
      }}
    </Formik>
  );
};
