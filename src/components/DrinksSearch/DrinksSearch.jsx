import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getIngredients,
} from '../../redux/filters/filters.operations';
import {
  selectCategories,
  selectIngredients,
} from '../../redux/filters/filters.selectors';
import { getSearchedDrink } from '../../redux/drinks/drinks.operations';
import { Filter, Wrapper } from './DrinksSearch.styled';
import Selection from './Select';

const DrinksSearch = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      setName(savedSearchQuery);
      dispatch(getSearchedDrink({ name: savedSearchQuery }));
    }
  }, [dispatch]);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);

    localStorage.setItem('searchQuery', value);
  };

  useEffect(() => {
    dispatch(getSearchedDrink({ name }));

    localStorage.setItem('searchQuery', name);
  }, [dispatch, name]);

  return (
    <Wrapper>
      <Filter
        id="filterInput"
        type="text"
        placeholder="Enter the text"
        value={name}
        onChange={handleChangeName}
        debounceTimeout={1000}
      />
      <Selection
        id="categorySelect"
        placeholder="All categories"
        options={categories.map((category) => category.category)}
      />
      <Selection
        id="ingredientSelect"
        placeholder="Ingredients"
        options={ingredients.map((ingredient) => ingredient.title)}
      />
    </Wrapper>
  );
};

export default DrinksSearch;
