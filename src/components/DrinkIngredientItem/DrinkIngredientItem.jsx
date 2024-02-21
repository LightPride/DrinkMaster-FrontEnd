import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
} from './DrinkIngredientItem.styled';

const DrinkIngredientItem = ({ title, measure, quantity, image }) => {
  return (
    <>
      <IngredientPhotoWrapper>
        <picture>
          <source media="(min-width: 1440px)" srcSet={image} />
          <source media="(min-width: 768px)" srcSet={image} />
          <source media="(min-width: 375px)" srcSet={image} />
          <IngredientPhoto src={image} alt="ingredient photo" />
        </picture>
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
