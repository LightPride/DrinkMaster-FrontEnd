import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonsContainer,
  Card,
  CardImage,
  DeleteBtn,
  Description,
  DrinkName,
  IconTrash,
  IsAlco,
} from './DrinksItem.styled';
import placeholderImage from '../../images/DrinksPlaceholder/coctailPlaceholder.png';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import {
  getOwnDrinks,
  removeOwnDrink,
  removeDrinkFromFavorite,
  getFavoriteAll,
} from '../../redux/drinks/drinks.operations';
import {
  selectFavoriteDrinks,
  selectOwnDrinks,
  selectPage,
} from '../../redux/drinks/drinks.selectors';

const DrinksItem = ({ drinkData, favorite }) => {
  const dispatch = useDispatch();
  const { drink, drinkThumb, alcoholic, description, _id } = drinkData;
  const favoriteDrinkList = useSelector(selectFavoriteDrinks);
  const ownDrinkList = useSelector(selectOwnDrinks);
  const page = useSelector(selectPage);

  const handleRemove = () => {
    favorite
      ? dispatch(removeDrinkFromFavorite(_id)).then(() => {
          if (favoriteDrinkList.length - 1 === 0) {
            if (page > 1) {
              const currentPage = page - 1;
              dispatch(getFavoriteAll({ page: currentPage }));
            }
          }
        })
      : dispatch(removeOwnDrink(_id)).then(() => {
          if (ownDrinkList.length - 1 === 0) {
            if (page > 1) {
              const currentPage = page - 1;
              dispatch(getOwnDrinks({ page: currentPage }));
            }
          }
        });
  };

  return (
    <Card>
      <CardImage
        src={drinkThumb || placeholderImage}
        alt={drink}
        onError={(e) => {
          e.target.src = placeholderImage;
        }}
      />
      <DrinkName>{drink}</DrinkName>
      <IsAlco>{alcoholic}</IsAlco>
      <Description>{description}</Description>
      <ButtonsContainer>
        <SeeMoreBtn navLink={`/drinks/${_id}`} />
        <DeleteBtn type="button" onClick={handleRemove}>
          <IconTrash viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" />
          </IconTrash>
        </DeleteBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default DrinksItem;
