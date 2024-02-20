import { Button } from '../Button/Button';
// import PageTitle from '../PageTitle/PageTitle';

import {
  HomePageHeroWrapper,
  HomePageSubtitle,
  HomePageTextWrapper,
  HomePageImageWrapper,
  HomePageImage,
  HomePageTitle
} from './HomePageHero.styled';

const HomePageHero = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <HomePageHeroWrapper>
      <HomePageTextWrapper>
        {/* <PageTitle>Craft Your Perfect Drink with Drink Master</PageTitle> */}
        <HomePageTitle>Craft Your Perfect Drink with Drink Master</HomePageTitle>
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
            srcSet="../../../src/images/hero/hero@1xDesk.jpg, 
          ../../src/images/hero/hero@2xDesktop.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="../../../src/images/hero/hero@1xTab.jpg, 
          ../../../src/images/hero/hero@2xTab.jpg"
          />
          <source
            media="(min-width: 375px)"
            srcSet="../../../src/images/hero/hero@1xMob.jpg, 
          ../../../src/images/hero/hero@2xMob.jpg"
          />
          <HomePageImage
            src="../../../src/images/hero/hero@1xDesk.jpg"
            alt="glass photo"
            // width="359"
            // height="445p"
          />
        </picture>
      </HomePageImageWrapper>
    </HomePageHeroWrapper>
  );
};

export default HomePageHero;
