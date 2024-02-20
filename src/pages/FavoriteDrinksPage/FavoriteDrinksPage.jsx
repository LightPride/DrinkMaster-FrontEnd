// import { useSelector } from 'react-redux';
// import { NotAdd } from '../../shared/components/NotAdd/NotAdd';
import { Container } from '../../components/Layout/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';

// треба ще імпортувати селектори, пагінацію, card list

const Favorites = () => {
  // const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <PageTitle title="Favorites" />
      {/* {favorites.length > 0 ? <CardList data={favorites} /> : <NotAdd />}
      <Pagination paginationThunk={getFavoriteThunk} /> */}
    </Container>
  );
};

export default Favorites;
