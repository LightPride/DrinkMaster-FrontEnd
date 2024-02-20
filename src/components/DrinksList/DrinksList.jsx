import { CardList } from './DrinksList.styled';
import DrinksItem from '../DrinksItem/DrinksItem';

const DrinksList = ({ drinksData, favorite }) => {
  return (
    <>
      <CardList>
        {drinksData.map((drink) => {
          return (
            <DrinksItem key={drink._id} drinkData={drink} favorite={favorite} />
          );
        })}
      </CardList>
    </>
  );
};

export default DrinksList;
