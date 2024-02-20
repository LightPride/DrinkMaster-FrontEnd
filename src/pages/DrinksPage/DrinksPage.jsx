import { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { Drinks } from '../../components/Drinks/Drinks';
import { Container } from '../../components/Layout/Container/Container';
import { ErrorMessage } from './DrinksPage.styled';
import { Wrapper } from './DrinksPage.styled';
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
    <Container>
      <Wrapper>
        <PageTitle title="Drinks" />
        <DrinksSearch handleChangeFilter={handleChangeFilter} />
        {filteredDrinks.length > 0 ? (
          <Drinks drinks={filteredDrinks} />
        ) : (
          <ErrorMessage>No cocktails were found for your request</ErrorMessage>
        )}
      </Wrapper>
    </Container>
  );
}
