// import { useSelector } from 'react-redux';
// import { NotAdd } from '../../shared/components/NotAdd/NotAdd';
import Title from '../../components/PageTitle/PageTitle';

// треба ще імпортувати селектори, пагінацію, card list

const MyDrinks = () => {
  // const own = useSelector(selectOwn);

  return (
    <>
      <Title Title="My drinks" />
      {/* {own.length > 0 ? <CardList data={own} /> : <NotAdd />}
      <Pagination paginationThunk={getOwnThunk} /> */}
    </>
  );
};

export default MyDrinks;
