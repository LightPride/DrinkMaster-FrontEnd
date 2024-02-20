import {  HomeWrapper } from './HomePage.styled';
import HomePageHero from '../../components/HomePageHero/HomePageHero';
// import HomePageHeroList from '../../components/HomePageHero/HomePageHero';
import recipes from '../../helpers/data/recipes.json';
import { Container } from '../../components/Layout/Container/Container'

const HomePage = () => {
  return (
   <HomeWrapper>
    <Container>
      <HomePageHero
      id ={recipes._id}
      name ={recipes[0].drink}
      imPath={recipes[0].drinkThumb}
      category={recipes[0].category}
      />
    </Container>
   </HomeWrapper>
  );
};

export default HomePage;
