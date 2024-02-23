import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
} from './DrinkIngredientItem.styled';
import defaultImage from '../../images/drinkPage/coctailPlaceholder.png';

const DrinkIngredientItem = ({ title, measure, quantity, image }) => {
  return (
    <>
      <IngredientPhotoWrapper>
        {/* {!image['ingredientThumb'] ? (
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={image['ingredientThumb']}
            />
            <source media="(min-width: 768px)" srcSet={image['thumb-medium']} />
            <source media="(min-width: 375px)" srcSet={image['thumb-small']} />
            <IngredientPhoto src={image} alt="ingredient photo" />
          </picture>
        ) : ( */}
        <IngredientPhoto src={defaultImage} alt="img"></IngredientPhoto>
        {/* )} */}
      </IngredientPhotoWrapper>
      <IngredientDescription>
        <IngredientTitle>{title}</IngredientTitle>
        <IngredientMeasure>
          {quantity ? `${quantity} ${measure}` : measure}
        </IngredientMeasure>
      </IngredientDescription>
    </>
  );
};

export default DrinkIngredientItem;
