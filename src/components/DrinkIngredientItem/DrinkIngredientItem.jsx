import {
  IngredientPhoto,
  IngredientPhotoWrapper,
  IngredientDescription,
  IngredientTitle,
  IngredientMeasure,
  // StubPhotoWrapper,
} from './DrinkIngredientItem.styled';

const DrinkIngredientItem = ({ title, measure, quantity, images }) => {
  return (
    <>
      <IngredientPhotoWrapper>
        <picture>
          <source media="(min-width: 1440px)" srcSet={images} />
          <source media="(min-width: 768px)" srcSet={images} />
          <source media="(min-width: 375px)" srcSet={images} />
          <IngredientPhoto src={images} alt="ingredient photo" />
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
