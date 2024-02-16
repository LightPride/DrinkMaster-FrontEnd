import cocktailDefaultMobile from '../../../images/Cocktails/coctails@1xMob.jpg';
import cocktailDefaultMobile2x from '../../../images/Cocktails/coctails@2xMob.jpg';
import cocktailDefaultTablet from '../../../images/Cocktails/coctails@1xTab.jpg';
import cocktailDefaultTablet2x from '../../../images/Cocktails/coctails@2xTab.jpg';
import cocktailDefaultDesktop from '../../../images/Cocktails/coctails@1xDesk.jpg';
import cocktailDefaultDesktop2x from '../../../images/Cocktails/coctails@2xDesk.jpg';

import {
  RecipePreparationTitle,
  RecipePreparationDescription,
  RecipePreparationImage,
  RecipePreparationWrap,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
      <RecipePreparationWrap>
        <RecipePreparationDescription>
          {instructions}
        </RecipePreparationDescription>

        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${cocktailDefaultDesktop} 1x, ${cocktailDefaultDesktop2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${cocktailDefaultTablet} 1x, ${cocktailDefaultTablet2x} 2x`}
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${cocktailDefaultMobile} 1x, ${cocktailDefaultMobile2x} 2x`}
          />
          <RecipePreparationImage
            src={cocktailDefaultMobile}
            alt="drinks photo"
          />
        </picture>
      </RecipePreparationWrap>
    </>
  );
};
