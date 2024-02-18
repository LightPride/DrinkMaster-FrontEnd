import {
  ButtonsContainer,
  Card,
  CardImage,
  DeleteBtn,
  Description,
  DrinkName,
  IconTrash,
  IsAlco,
} from './DrinksItem.styled';

const DrinksItem = () => {
  return (
    <Card>
      <CardImage />
      <DrinkName></DrinkName>
      <IsAlco></IsAlco>
      <Description></Description>
      <ButtonsContainer>
        {/* <SeeMoreBtn /> */}
        <DeleteBtn>
          <IconTrash />
        </DeleteBtn>
      </ButtonsContainer>
    </Card>
  );
};

export default DrinksItem;
