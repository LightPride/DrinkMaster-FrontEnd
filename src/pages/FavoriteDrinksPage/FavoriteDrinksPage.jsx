import { useSelector } from 'react-redux';
import { NotAdd } from '@/shared/components/NotAdd/NotAdd';
import Title from '@/components/PageTitle/PageTitle';

// треба ще імпортувати селектори, пагінацію, card list

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Title title="Favorites" />
      {favorites.length > 0 ? <CardList data={favorites} /> : <NotAdd />}
      <Pagination paginationThunk={getFavoriteThunk} />
    </>
  );
};

export default Favorites;
