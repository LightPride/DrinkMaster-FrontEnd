import { useEffect, useState } from 'react';
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
  console.log(favoriteDrinkList);

  const isDrinkFavoritelist = (id) => {
    if (favoriteDrinkList.length > 0) {
      const lastDrink = favoriteDrinkList[favoriteDrinkList.length - 1];
      if (lastDrink) {
        return favoriteDrinkList.find((drink) => drink._id === id);
      }
    }
  };
  // console.log(favoriteDrinkList.find((drink) => drink._id === id));

  // const [isFavorite, setIsFavorite] = useState(isDrinkFavoritelist(id));
  const [isFavorite, setIsFavorite] = useState(isDrinkFavoritelist(id));

  // if (isDrinkFavoritelist) {
  //   setIsFavorite(true);
  // } else {
  //   setIsFavorite(false);
  // }

  // const handleClickAddFavorite = () => {
  //   dispatch(addDrinkToFavorite(id));
  // };

  const handleClickAddFavorite = () => {
    dispatch(addDrinkToFavorite(id)).then(() => setIsFavorite(true));
  };

  // const handleClickRemoveFavorite = () => {
  //   dispatch(removeDrinkFromFavorite(id));
  // };

  const handleClickRemoveFavorite = () => {
    dispatch(removeDrinkFromFavorite(id)).then(() => setIsFavorite(false));
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
            {/* {!isDrinkFavoritelist(id) ? ( */}
            <AddToFavoriteButton
              onClick={
                // isFavorite ? handleClickRemoveFavorite : handleClickAddFavorite
                isDrinkFavoritelist(id)
                  ? handleClickRemoveFavorite
                  : handleClickAddFavorite
              }
              disabled={isLoading}
            >
              {/* {isDrinkFavoritelist(id) */}

              {isFavorite
                ? 'Remove from favorite drinks'
                : 'Add to favorite drinks'}

              {/* //     onClick={ */}
              {/* () =>
                     dispatch(addDrinkToFavorite(id)).then(() => console.log(1))
                    dispatch(addDrinkToFavorite(id)).then(() => noticeAdd)
                 }
                 disabled={isLoading}
               >
                 Add to favorite drinks
               </AddToFavoriteButton>
             ) : (
               <AddToFavoriteButton
                 onClick={
                   () =>
                     dispatch(removeDrinkFromFavorite(id)).then(() =>
                       console.log(2)
                     )
                   // dispatch(removeDrinkFromFavorite(id)).then(() => noticeRemove)
                 }
                 disabled={isLoading}
               >
                 Remove from favorite drinks */}
            </AddToFavoriteButton>
            {/* )} */}
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
