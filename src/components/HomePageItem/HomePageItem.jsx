import {
  ButtonsContainer,
  Card,
  CardImage,
  DrinkName,
} from '../DrinksItem/DrinksItem.styled';
import placeholderImage from '../../images/drinkPage/coctailPlaceholder.png';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';

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
      <DrinkName>{drinkName}</DrinkName>
      <ButtonsContainer>
        <SeeMoreBtn navLink={`/drinks/${_id}`}></SeeMoreBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default HomePageItem;
