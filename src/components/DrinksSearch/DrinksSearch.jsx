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
import { selectPage } from '../../redux/drinks/drinks.selectors';
import { getSearchedDrink } from '../../redux/drinks/drinks.operations';
import { Filter, Wrapper } from './DrinksSearch.styled';
import Selection from './Select';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaRules } from '../../hooks/useMediaRules';

const DrinksSearch = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const page = useSelector(selectPage);
  const location = useLocation();
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState('1');
  let currentPage;

  // if (page > 1) {
  //   currentPage = page;
  //   console.log(currentPage);
  // }
  // //console.log(page);
  // console.log(currentPage);

  const queryParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState(queryParams.get('name') || '');
  const [selectedCategory, setSelectedCategory] = useState(
    queryParams.get('category') || ''
  );
  const [selectedIngredient, setSelectedIngredient] = useState(
    queryParams.get('ingredient') || ''
  );
  const { isDesktop } = useMediaRules();

  // Додано стан для відстеження завантаження категорій та інгредієнтів
  const [isFiltersLoaded, setIsFiltersLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    // Перевірка, чи обидва набори даних завантажені
    if (categories.length > 0 && ingredients.length > 0) {
      setIsFiltersLoaded(true);
    }
  }, [categories, ingredients]);

  useEffect(() => {
    if (isFiltersLoaded) {
      const searchAndNavigate = async () => {
        await dispatch(
          getSearchedDrink(
            {
              name: searchQuery,
              category: selectedCategory,
              ingredient: selectedIngredient,
              page: page > 1 ? (currentPage = page) : (currentPage = 1),
              size: isDesktop ? 9 : 8,
            },
            [dispatch, currentPage]
          )
        );
        console.log(currentPage);

        const params = new URLSearchParams();
        if (searchQuery) params.append('name', searchQuery);
        if (selectedCategory) params.append('category', selectedCategory);
        if (selectedIngredient) params.append('ingredient', selectedIngredient);
        params.append('page', page);
        const queryString = params.toString();
        navigate(`?${queryString}`);
      };

      searchAndNavigate();
    }
  }, [
    dispatch,
    searchQuery,
    selectedCategory,
    selectedIngredient,
    page,
    isDesktop,
    navigate,
    isFiltersLoaded,
  ]);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const handleCategoryChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedCategory(value);
  };

  const handleIngredientChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedIngredient(value);
  };

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
        value={searchQuery}
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
