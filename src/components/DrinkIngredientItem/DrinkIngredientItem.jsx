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
        {image ? (
          <picture>
            <IngredientPhoto src={image} alt="ingredient photo" />
          </picture>
        ) : (
          <IngredientPhoto src={defaultImage} alt="img"></IngredientPhoto>
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
