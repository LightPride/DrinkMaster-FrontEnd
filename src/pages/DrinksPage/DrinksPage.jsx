// import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';

import { ErrorMessage } from './DrinksPage.styled';

// ==============
import recipes from '../../helpers/Data/recipes.json';
// ==============

export default function DrinksPage() {
  return (
    <div>
      <PageTitle title="Drinks" />
      <DrinksSearch />
      {/* Перевіряємо, чи є рецепти, якщо немає, виводимо повідомлення про помилку */}
      {recipes.length > 0 ? (
        <Drinks drinks={recipes} />
      ) : (
        <ErrorMessage>No cocktails were found for your request</ErrorMessage>
      )}
    </div>
  );
}
