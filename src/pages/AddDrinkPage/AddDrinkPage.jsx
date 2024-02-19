import {
  Wrapper,
  FlexContainer,
  SubContainer,
  SubTitle,
} from './AddDrinkPage.styled';

import { AddDrinkForm } from '../../components/AddDrinkForm/AddDrinkForm';
import { PopularDrinks } from '../../components/PopularDrinks/PopularDrinks';
import PageTitle from '../../components/PageTitle/PageTitle';
import FollowUs from '../../components/FollowUs/FollowUs';

// Приклади категорій коктейлів
const categories = [
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Snake', label: 'Snake' },
  { value: 'Shot', label: 'Shot' },
];

// Приклади типів сервірування
const servings = [
  { value: 'Highball glass', label: 'Highball glass' },
  { value: 'Cocktail glass', label: 'Cocktail glass' },
  { value: 'Whiskey Glass', label: 'Whiskey Glass' },
];

// Приклади інгредієнтів
const ingredients = [
  { value: 'Lem', label: 'Lem' },
  { value: 'Passoa', label: 'Passoa' },
  { value: 'Prosecco', label: 'Prosecco' },
];

const AddDrinkPage = () => {
  return (
    <Wrapper>
      <PageTitle title="Add drink" />
      <FlexContainer>
        <AddDrinkForm
          categories={categories}
          servings={servings}
          ingredients={ingredients}
        />
        <SubContainer>
          <div>
            <SubTitle mb="20px">Follow Us</SubTitle>
            <FollowUs />
          </div>
          <div>
            <SubTitle mb="28px">Popular Drinks</SubTitle>
            <PopularDrinks />
          </div>
        </SubContainer>
      </FlexContainer>
    </Wrapper>
  );
};

export default AddDrinkPage;
