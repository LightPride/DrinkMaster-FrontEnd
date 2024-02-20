import { Button } from '../Button/Button';

import {
  HomePageHeroWrapper,
  HomePageSubtitle,
  HomePageTextWrapper,
  HomePageImageWrapper,
  HomePageImage,
  HomePageTitle,
} from './HomePageHero.styled';

const HomePageHero = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <HomePageHeroWrapper>
      <HomePageTextWrapper>
        <HomePageTitle>
          Craft Your Perfect Drink with Drink Master
        </HomePageTitle>
        <HomePageSubtitle>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the worlds finest
          beverages.
        </HomePageSubtitle>
        <Button addRecipe onClick={handleClick}>
          Add drink
        </Button>
      </HomePageTextWrapper>
      <HomePageImageWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="../../src/images/404Images/blueIced@1xDesk.png 1x, 
          ../../src/images/404Images/blueIced@2xDesk.png 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="../../src/images/404Images/blueIced@1xTab.png 1x, 
          ../../src/images/404Images/blueIced@2xTab.png 2x"
          />
          <source
            media="(max-width: 767px)"
            srcSet="../../src/images/404Images/blueIced@1xMob.png 1x, 
          ../../src/images/404Images/blueIced@2xMob.png 2x"
          />
          <HomePageImage
            src="../../src/images/404Images/blueIced@1xDesk.png"
            alt="glass photo"
          />
        </picture>
      </HomePageImageWrapper>
    </HomePageHeroWrapper>
  );
};

export default HomePageHero;
