import {
  NotFoundImage,
  NotFoundPageContainer,
  NotFoundText,
} from './NotFoundDrinks.styled';

const NotFoundDrinks = ({ text, forwardRef }) => {
  return (
    <NotFoundPageContainer>
      <NotFoundImage />
      <NotFoundText ref={forwardRef}>{text}</NotFoundText>
    </NotFoundPageContainer>
  );
};

export default NotFoundDrinks;
