import { Link } from 'react-router-dom';

import coctailDesk1 from '../../images/404Images/blueIced@1xDesk.png';
import coctailDesk2 from '../../images/404Images/blueIced@2xDesk.png';
import coctailTab1 from '../../images/404Images/blueIced@1xTab.png';
import coctailTab2 from '../../images/404Images/blueIced@2xTab.png';
import coctailMob1 from '../../images/404Images/blueIced@1xMob.png';
import coctailMob2 from '../../images/404Images/blueIced@2xMob.png';

import {
  HomePageHeroWrapper,
  HomePageSubtitle,
  HomePageTextWrapper,
  HomePageImageWrapper,
  HomePageImage,
  HomePageTitle,
  AddDrinksButton,
} from './HomePageHero.styled';

const HomePageHero = () => {
  // const handleClick = () => {
  //   console.log('Button clicked');
  // };
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
        <Link to={`/add`}>
          <AddDrinksButton type="button">Add drinks</AddDrinksButton>
        </Link>
      </HomePageTextWrapper>
      <HomePageImageWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${coctailDesk1} 1x, ${coctailDesk2} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${coctailTab1} 1x, ${coctailTab2} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${coctailMob1} 1x, ${coctailMob2} 2x`}
            type="image/png"
          />
          <HomePageImage
            src={coctailDesk1}
            alt="glass photo"
            loading="lazy"
            width="349"
            height="445"
          />
        </picture>
      </HomePageImageWrapper>
    </HomePageHeroWrapper>
  );
};

export default HomePageHero;
