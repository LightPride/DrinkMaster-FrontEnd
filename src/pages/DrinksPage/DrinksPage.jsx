import { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';

import { ErrorMessage } from './DrinksPage.styled';

// ==============
import recipes from '../../helpers/data/recipes.json';
// ==============

export default function DrinksPage() {
  const [filter, setFilter] = useState('');

  const filteredDrinks = recipes.filter((drink) =>
    filter.trim() !== ''
      ? drink.drink.toLowerCase().includes(filter.toLowerCase())
      : true
  );

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <PageTitle title="Drinks" />
      <DrinksSearch handleChangeFilter={handleChangeFilter} />
      {filteredDrinks.length > 0 ? (
        <Drinks drinks={filteredDrinks} />
      ) : (
        <ErrorMessage>No cocktails were found for your request</ErrorMessage>
      )}
    </div>
  );
}
