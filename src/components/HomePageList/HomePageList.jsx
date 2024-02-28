import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectMainPageDrinks } from '../../redux/drinks/drinks.selectors';
import {
  Category,
  CategoryContainer,
  CategoryCardList,
  CardsWrapper,
  CategoryWrapper,
} from './HomePageList.styled';
import DrinksItem from '../Drinks/DrinksItem';
const HomePageList = ({ quantity }) => {
  const drinksData = useSelector(selectMainPageDrinks);
  return (
    <CategoryContainer>
      <CategoryCardList>
        {drinksData.map(({ category, drinks }) => {
          return (
            <CategoryWrapper key={nanoid()}>
              <Category key={nanoid()}>{category}</Category>
              <CardsWrapper key={nanoid()}>
                {drinks.slice(0, quantity).map(({ drink, drinkThumb, _id }) => {
                  return (
                    <DrinksItem
                      key={_id}
                      id={_id}
                      drinkTitle={drink}
                      drinkThumb={drinkThumb}
                    />
                  );
                })}
              </CardsWrapper>
            </CategoryWrapper>
          );
        })}
      </CategoryCardList>
    </CategoryContainer>
  );
};

export default HomePageList;
