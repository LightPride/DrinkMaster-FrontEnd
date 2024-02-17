// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getIngredients } from '../../redux/filters/filters-operation';
import DrinkIngredientItem from '../DrinkIngredientItem/DrinkIngredientItem';
import {
  IngredientsTitle,
  IngredientsList,
} from './DrinkIngredientsList.styled';

// import drink from '../../../data/drink.json';
// import ingredients from '../../../data/ingredients.json';
// import { useDrink } from '../../redux/hooks/useDrink';

const DrinkIngredientsList = ({ ingredients }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(getIngredients());
  // }, [dispatch]);

  // const { drinks } = useDrink();

  //const ingredientsWithImages = drink[0].ingredients;
  // console.log(ingredientsWithImages);

  return (
    <>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>
        {ingredients.map((ingredient) => (
          <DrinkIngredientItem
            title={ingredient.title}
            measure={ingredient.measure}
            quantity={ingredient.quantity}
            images={images}
          />
        ))}
      </IngredientsList>
    </>
  );
};

export default DrinkIngredientsList;
