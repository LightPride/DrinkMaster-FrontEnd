import { HomeContainer, HomeWrapper } from './HomePage.styled';
import HomePageHero from '../../components/HomePageHero/HomePageHero';
import HomePageHeroList from '../../components/HomePageHero/HomePageHero';
import recipes from '../../helpers/data/recipes.json';

const HomePage = () => {
  return (
   <HomeWrapper>
    <HomeContainer>
      <HomePageHero
      id ={recipes._id}
      name ={recipes[0].drink}
      imPath={recipes[0].drinkThumb}
      category={recipes[0].category}
      />
    </HomeContainer>
   </HomeWrapper>
  );
};

export default HomePage;
