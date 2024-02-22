import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteDrinks,
  selectIsLoading,
} from '../../redux/drinks/drinks.selectors';
import {
  getFavoriteAll,
  addDrinkToFavorite,
  removeDrink,
} from '../../redux/drinks/drinks.operations';
import {
  DrinkSubTitle,
  DrinkDescription,
  AddToFavoriteButton,
  DrinkPhoto,
  DrinkDescriptionWrapper,
  DrinkHeroWrapper,
  DrinkPhotoWrapper,
} from './DrinkPageHero.styled';
import PageTitle from '../PageTitle/PageTitle';
import defaultImage from '../../images/drinkPage/coctailPlaceholder.png';

const DrinkPageHero = ({
  id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  const dispatch = useDispatch();
  const favoriteDrinkList = useSelector(selectFavoriteDrinks);
  const isLoading = useSelector(selectIsLoading);
  // console.log(favoriteDrinkList);

  const isDrinkFavoritelist = (id) => {
    if (favoriteDrinkList) {
      return favoriteDrinkList.find((drink) => drink._id === id);
    }
  };

  useEffect(() => {
    dispatch(getFavoriteAll());
  }, [dispatch]);

  return (
    <>
      {favoriteDrinkList && (
        <DrinkHeroWrapper>
          <DrinkDescriptionWrapper>
            <PageTitle title={name} />
            <DrinkSubTitle>
              {glass} / {alcoholic}
            </DrinkSubTitle>
            <DrinkDescription>{description}</DrinkDescription>
            {!isDrinkFavoritelist(id) ? (
              <AddToFavoriteButton
                onClick={() => dispatch(addDrinkToFavorite(id))}
                disabled={isLoading}
              >
                Add to favorite drinks
              </AddToFavoriteButton>
            ) : (
              <AddToFavoriteButton
                onClick={() => dispatch(removeDrink(id))}
                disabled={isLoading}
              >
                Remove from favorite drinks
              </AddToFavoriteButton>
            )}
          </DrinkDescriptionWrapper>
          <DrinkPhotoWrapper>
            {imgPath ? (
              <DrinkPhoto src={imgPath} alt="img"></DrinkPhoto>
            ) : (
              <DrinkPhoto src={defaultImage} alt="img"></DrinkPhoto>
            )}
          </DrinkPhotoWrapper>
        </DrinkHeroWrapper>
      )}
    </>
  );
};

export default DrinkPageHero;
