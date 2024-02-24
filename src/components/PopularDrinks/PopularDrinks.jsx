import { useDispatch, useSelector } from 'react-redux';
import { WraperList } from './PopularDrinks.styled';
import { selectPopularDrinks } from '../../redux/drinks/drinks.selectors';
import { Link } from 'react-router-dom';

export const PopularDrinks = ({ addTest }) => {
  const dispatch = useDispatch();

  const popularDrinks = useSelector(selectPopularDrinks);

  const handleClick = (item) => {
    addTest(item);
  };

  return (
    <WraperList>
      {popularDrinks.map((item) => {
        return (
          <li key={item._id}>
            <button
              alt="add and edit drink"
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
            >
              +
            </button>
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
