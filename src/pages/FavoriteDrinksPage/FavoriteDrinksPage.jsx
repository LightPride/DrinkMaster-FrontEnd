import { useSelector } from 'react-redux';
import { NotAdd } from '@/components/FavoriteDrinksPageComponents/NotAdd/NotAdd';


// треба ще імпортувати селектори, тайтл, пагінацію, card list 


import { Container, Title } from './FavoriteDrinksPage.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Title Title="Favorites" />
      {favorites.length > 0 ? <CardList data={favorites} /> : <NotAdd />}
      <Pagination paginationThunk={getFavoriteThunk} />
    </>
  );
};

export default Favorites;
