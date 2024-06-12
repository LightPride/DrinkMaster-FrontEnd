import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteDrinks,
  selectIsLoading,
} from '../../redux/drinks/drinks.selectors';
import {
  getFavoriteAll,
  addDrinkToFavorite,
  removeDrinkFromFavorite,
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
import defaultImage from '../../images/DrinksPlaceholder/coctailPlaceholder.png';

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
  const size = 1000;

  const isDrinkFavoriteList = (id) => {
    if (favoriteDrinkList) {
      return !!favoriteDrinkList.find((drink) => drink._id === id);
    }
    return false;
  };

  const handleClickAddFavorite = () => {
    dispatch(addDrinkToFavorite(id)).then(() => {
      dispatch(getFavoriteAll({ size: size }));
    });
  };

  const handleClickRemoveFavorite = () => {
    dispatch(removeDrinkFromFavorite(id)).then(() => {
      dispatch(getFavoriteAll({ size: size }));
    });
  };

  useEffect(() => {
    dispatch(getFavoriteAll({ size: size }));
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
            <AddToFavoriteButton
              onClick={
                isDrinkFavoriteList(id)
                  ? handleClickRemoveFavorite
                  : handleClickAddFavorite
              }
              disabled={isLoading}
            >
              {isDrinkFavoriteList(id)
                ? 'Remove from favorite drinks'
                : 'Add to favorite drinks'}
            </AddToFavoriteButton>
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
