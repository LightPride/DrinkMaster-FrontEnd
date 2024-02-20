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

        <HomePageImageWrapper>
          <picture> 
          <source media="(min-width: 1440px)" srcSet="../../images/404images/blueIced@1xDesk.png, 
          ../../images/404images/blueced@2xDesktop.png"  />
          <source media="(min-width: 768px)" srcSet="../../images/404images/blueIced@1xTab.png, 
          ../../images/404images/blueced@2xTab.png" />
          <source media="(min-width: 375px)" srcSet="../../images/404images/blueIced@1xMob.png, 
          ../../images/404images/blueced@2xMob.png" />
            <HomePageImage src="../../images/404Images/blueIced@1xDesk.png" alt="glass photo" />
          </picture>
         
        </HomePageImageWrapper>
      </HomePageHeroWrapper>
    
  );
};

export default HomePageHero;
