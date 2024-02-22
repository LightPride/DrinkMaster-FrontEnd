import Selection from './Select';
import { Filter, Wrapper } from './DrinksSearch.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getIngredients,
} from '../../redux/filters/filters.operations';
import {
  selectCategories,
  selectIngredients,
} from '../../redux/filters/filters.selectors';

const DrinksSearch = ({ handleChangeFilter }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    // !isLoading && (
    <Wrapper>
      <Filter
        id="filterInput"
        type="text"
        placeholder="Enter the text"
        // value={filter}
        onChange={handleChangeFilter}
        debounceTimeout={1000}
      />
      <Selection
        id="categorySelect"
        placeholder="All categories"
        options={categories.map((category) => category.category)}
        // onChange={handleChangeCategory}
        // value={category}
      />
      <Selection
        id="ingredientSelect"
        placeholder="Ingredients"
        options={ingredients.map((ingredient) => ingredient.title)}
        // onChange={handleChangeIngredient}
        // value={ingredient.value}
      />
    </Wrapper>
  );
  // );
};

export default DrinksSearch;
