import {
  DrinkSubTitle,
  DrinkDescription,
  AddToFavoriteButton,
  DrinkPhoto,
  DrinkDescriptionWrapper,
  DrinkHeroWrapper,
  DrinkPhotoWrapper,
  // DrinkSvgWrapper,
} from './DrinkPageHero.styled';
import PageTitle from '../PageTitle/PageTitle';

const DrinkPageHero = ({
  // id,
  name,
  glass,
  alcoholic,
  description,
  imgPath,
}) => {
  console.log(imgPath);
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
          <DrinkPhoto src={imgPath} alt="img"></DrinkPhoto>
        </DrinkPhotoWrapper>

        {/* <DrinkPhotoWrapper>
          {imgPath ? (
            <DrinkPhoto src={imgPath} alt="img"></DrinkPhoto>
          ) : (
            <DrinkPhoto
              src="../../images/drinkPage/coctailPlaceholder.png"
              alt="img"
            ></DrinkPhoto>
          )}
        </DrinkPhotoWrapper> */}
      </DrinkHeroWrapper>
    </>
  );
};

export default DrinkPageHero;
