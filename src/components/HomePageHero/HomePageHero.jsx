import PageTitle from '../PageTitle/PageTitle';
import {
  AddDrinkButton,
  HomePageHeroWrapper,
  HomePageSubtitle,
  HomePageTextWrapper,
  HomePageImageWrapper,
  HomePageImage,
} from './HomePageHero.styled';

const HomePageHero = () => {
  return (
    <>
      <HomePageHeroWrapper>
        <HomePageTextWrapper>
          <PageTitle>Craft Your Perfect Drink with Drink Master</PageTitle>
          <HomePageSubtitle>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world`s
            finest beverages.
          </HomePageSubtitle>
          <AddDrinkButton>Add drink</AddDrinkButton>
        </HomePageTextWrapper>
        
        <HomePageImageWrapper>
          <HomePageImage />
        </HomePageImageWrapper>
      </HomePageHeroWrapper>
    </>
  );
};

export default HomePageHero;
