import { Card, CardImage } from '../DrinksItem/DrinksItem.styled';
import placeholderImage from '../../images/drinkPage/coctailPlaceholder.png';
import { ButtonsContentWrapper, DrinkTitle, SeeMoreRef } from './HomePageItem.styled';

const HomePageItem = ({ drinkName, _id, drinkThumb }) => {
  return (
    <Card>
      <CardImage
        key={_id}
        src={drinkThumb || placeholderImage}
        alt={drinkName}
        onError={(e) => {
          e.target.src = placeholderImage;
        }}
      />

      <ButtonsContentWrapper>
        <DrinkTitle>{drinkName}</DrinkTitle>
        <SeeMoreRef navLink={`/drinks/${_id}`}>see more</SeeMoreRef>
      </ButtonsContentWrapper>
    </Card>
  );
};

export default HomePageItem;
