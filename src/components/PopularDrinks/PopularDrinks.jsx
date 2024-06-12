import { useSelector } from 'react-redux';
import { WraperList } from './PopularDrinks.styled';
import { selectPopularDrinks } from '../../redux/drinks/drinks.selectors';
import { Link } from 'react-router-dom';

export const PopularDrinks = () => {
  const popularDrinks = useSelector(selectPopularDrinks);

  return (
    <WraperList>
      {popularDrinks.map((item) => {
        return (
          <li key={item._id}>
            <Link to={`/drinks/${item._id}`}>
              <img src={item.drinkThumb} alt={item.tags} />
              <div>
                <h4>{item.drink} </h4>
                <p>{item.description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </WraperList>
  );
};
