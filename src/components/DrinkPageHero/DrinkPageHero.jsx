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
  // id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  return (
    <>
      <DrinkHeroWrapper>
        <DrinkDescriptionWrapper>
          <PageTitle title={name} />
          <DrinkSubTitle>
            {glass} / {alcoholic}
          </DrinkSubTitle>
          <DrinkDescription>{description}</DrinkDescription>
          <AddToFavoriteButton>Add to favorite drinks</AddToFavoriteButton>
        </DrinkDescriptionWrapper>

        <DrinkPhotoWrapper>
          {imgPath ? (
            <DrinkPhoto src={imgPath} alt="img"></DrinkPhoto>
          ) : (
            <DrinkPhoto src={defaultImage} alt="img"></DrinkPhoto>
          )}
        </DrinkPhotoWrapper>
      </DrinkHeroWrapper>
    </>
  );
};

export default DrinkPageHero;
