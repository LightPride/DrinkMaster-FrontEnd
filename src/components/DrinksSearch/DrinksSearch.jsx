import Selection from './Select';
import { Filter, Wrapper } from './DrinksSearch.styled';

// ============
import categories from '../../helpers/Data/categories';
const optionsCategories = categories.map((category) => category.categori);

import ingredientsData from '../../helpers/Data/ingredients.json';
const options = ingredientsData.map((ingredient) => ingredient.title);
// ============

const DrinksSearch = () => {
  return (
    // !isLoading && (
    <Wrapper>
      <Filter
        id="filterInput"
        type="text"
        placeholder="Enter the text"
        // value={filter}
        // onChange={handleChangeFilter}
        debounceTimeout={1000}
      />
      <Selection
        id="categorySelect"
        placeholder="All categories"
        options={optionsCategories}
        // onChange={handleChangeCategory}
        // value={category}
      />
      <Selection
        id="ingredientSelect"
        placeholder="Ingredients"
        options={options}
        // onChange={handleChangeIngredient}
        // value={ingredient.value}
      />
    </Wrapper>
  );
  // );
};

export default DrinksSearch;
