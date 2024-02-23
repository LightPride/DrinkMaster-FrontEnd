import { useEffect, useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      setName(savedSearchQuery);
      dispatch(getSearchedDrink({ name: savedSearchQuery }));
    }
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
    const savedIngredient = localStorage.getItem('selectedIngredient');
    if (savedIngredient) {
      setSelectedIngredient(savedIngredient);
    }
  }, [dispatch]);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    localStorage.setItem('searchQuery', value);
  };

  const handleCategoryChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setSelectedCategory(value);
      localStorage.setItem('selectedCategory', value);
    } else {
      setSelectedCategory(''); // Очищення вибраної категорії
      localStorage.removeItem('selectedCategory'); // Видалення ключа з локального сховища
    }
  };

  const handleIngredientChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption.value;
      setSelectedIngredient(value);
      localStorage.setItem('selectedIngredient', value);
    } else {
      setSelectedIngredient(''); // Очищення вибраного інгредієнта
      localStorage.removeItem('selectedIngredient'); // Видалення ключа з локального сховища
    }
  };

  useEffect(() => {
    dispatch(
      getSearchedDrink({
        name,
        category: selectedCategory,
        ingredient: selectedIngredient,
      })
    );
    localStorage.setItem('searchQuery', name);
  }, [dispatch, name, selectedCategory, selectedIngredient]);

  // Фільтрація опцій для відображення вибору
  const filteredCategories = categories
    .map((category) => category.category)
    .filter((category) => category !== selectedCategory);
  const filteredIngredients = ingredients
    .map((ingredient) => ingredient.title)
    .filter((ingredient) => ingredient !== selectedIngredient);

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
        options={filteredCategories}
        onChange={handleCategoryChange}
      />
      <Selection
        id="ingredientSelect"
        placeholder="Ingredients"
        options={filteredIngredients}
        onChange={handleIngredientChange}
      />
    </Wrapper>
  );
};

export default DrinksSearch;
