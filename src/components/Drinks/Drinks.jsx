import DrinksItem from './DrinksItem';
import { List } from './Drinks.styled';

export const Drinks = ({ drinks }) => {
  return (
    <List>
      {drinks.map(({ drink, drinkThumb, _id }) => {
        return (
          <DrinksItem
            key={_id.$oid} 
            id={_id.$oid} 
            drinkTitle={drink}
            drinkThumb={drinkThumb}
          />
        );
      })}
    </List>
  );
};
