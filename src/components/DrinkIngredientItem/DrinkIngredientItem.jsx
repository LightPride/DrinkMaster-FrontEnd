import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
} from './DrinkIngredientItem.styled';
import defaultImage from '../../images/drinkPage/coctailPlaceholder.png';

const DrinkIngredientItem = ({ title, measure, quantity, images }) => {
  return (
    <>
      <IngredientPhotoWrapper>
        {images['ingredientThumb'] === '' ? (
          <IngredientPhoto src={defaultImage} alt="img"></IngredientPhoto>
        ) : (
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={images['ingredientThumb']}
            />
            <source
              media="(min-width: 768px)"
              srcSet={images['thumb-medium']}
            />
            <source media="(min-width: 375px)" srcSet={images['thumb-small']} />
            <IngredientPhoto
              src={images['ingredientThumb']}
              alt="ingredient photo"
            />
          </picture>
        )}
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
