import { CardList } from '../DrinksList/DrinksList.styled';
import  HomePageItem  from '../HomePageItem/HomePageItem';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectMainPageDrinks } from '../../redux/drinks/drinks.selectors';

const HomePageList = () => {
  const drinksData = useSelector(selectMainPageDrinks);
  return (
    <>
      <CardList>
        {drinksData.map(({ category, drinks }) => {
          return (
            <div className="categoryContainer" key={nanoid()}>
              <h2 key={nanoid()}>{category}</h2>
              <div className="coctailsContainer" key={nanoid()}>
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
    </>
  );
};

export default HomePageList;
