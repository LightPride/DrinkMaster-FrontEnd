import { CardList } from '../DrinksList/DrinksList.styled';
import  HomePageItem  from '../HomePageItem/HomePageItem';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectMainPageDrinks } from '../../redux/drinks/drinks.selectors';
import { Category, CategoryContainer } from './HomePageList.styled';

const HomePageList = () => {
  const drinksData = useSelector(selectMainPageDrinks);
  return (
    <CategoryContainer>
      <CardList>
        {drinksData.map(({ category, drinks }) => {
          return (
            <div key={nanoid()}>
              <Category key={nanoid()}>{category}</Category>
              <div key={nanoid()}>
                {drinks.map(({ drink, drinkThumb, _id }) => {
                  return (
                    <HomePageItem
                      key={_id}
                      drinkName={drink}
                      drinkThumb={drinkThumb}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </CardList>
    </CategoryContainer>
  );
};

export default HomePageList;
