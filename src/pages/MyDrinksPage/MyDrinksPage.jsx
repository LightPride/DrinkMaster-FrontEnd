// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getOwnDrinks } from '../../redux/drinks/drinks.operations';
import {
  ButtonsContainer,
  Card,
  CardImage,
  DeleteBtn,
  Description,
  DrinkName,
  IconTrash,
  IsAlco,
} from '../../components/DrinksItem/DrinksItem.styled';
import { Container } from '../../components/Layout/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import placeholderImage from '../../images/drinkPage/coctailPlaceholder.png';

export default function MyDrinks() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const drinksPerPage = 6;

  // const onPageChange = (pageNum) => {
  //   setCurrentPage(pageNum);
  // };

  // const totalPages = Math.ceil(total / drinksPerPage);

  // useEffect(() => {
  //   if (drinks?.length === 0 && currentPage > 1) {
  //     onPageChange(currentPage - 1);
  //   }
  //   setHasDrinks(drinks?.length > 0);
  // }, [drinks]);

  // useEffect(() => {
  //   navigate(`?page=${currentPage}`);
  // }, [currentPage]);

  // useEffect(() => {
  //   dispatch(getOwnDrinks({ page: currentPage, limit: drinksPerPage }))
  //     .unwrap()
  //     .catch((error) => console.log(error));
  // }, [dispatch, currentPage, total, drinksPerPage]);

  return (
    <Container>
      <PageTitle title="My drinks" />
      <Card>
        <CardImage src={placeholderImage} />
        <DrinkName>Lorem</DrinkName>
        <IsAlco>Alco</IsAlco>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, qui
          quae ex tempore illo eaque delectus iure error molestiae doloremque
          excepturi vel quam nisi maiores inventore!
        </Description>
        <ButtonsContainer>
          <SeeMoreBtn />
          <DeleteBtn>
            <IconTrash viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" />
            </IconTrash>
          </DeleteBtn>
        </ButtonsContainer>
      </Card>
      {/* {own.length > 0 ? <CardList data={own} /> : <NotAdd />}
      <Pagination paginationThunk={getOwnThunk} /> */}
    </Container>
  );
}
