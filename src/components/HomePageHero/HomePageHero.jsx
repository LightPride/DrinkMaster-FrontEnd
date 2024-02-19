import { Button } from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';
import {
  HomePageHeroWrapper,
  HomePageSubtitle,
  HomePageTextWrapper,
  HomePageImageWrapper,
  HomePageImage,
} from './HomePageHero.styled';


const HomePageHero = () => {
    const handleClick = () => {
        console.log('Button clicked');}
  return (

      <HomePageHeroWrapper>
        <HomePageTextWrapper>
          <PageTitle>Craft Your Perfect Drink with Drink Master</PageTitle>
          <HomePageSubtitle>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the worlds
            finest beverages.
          </HomePageSubtitle>
         <Button addRecipe onClick={handleClick}>Add drinks</Button>
        </HomePageTextWrapper>

        {/* <HomePageImageWrapper>
          <HomePageImage />
        </HomePageImageWrapper> */}
      </HomePageHeroWrapper>
    
  );
};

export default HomePageHero;
