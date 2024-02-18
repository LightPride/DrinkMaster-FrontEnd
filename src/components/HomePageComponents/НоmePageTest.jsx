import { Button } from '../Button/Button';

// import { Container } from '../../components/Layout/Container/Container';


const НomePageTest = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    // <Container>
      <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection: 'column', gap: '8px', padding: '120px' }}>
        <Button onClick={handleClick} addRecipe>
          Add Recipe
        </Button>
        <Button onClick={handleClick} logOut>
          Log Out
        </Button>
        <Button onClick={handleClick} addToFavorite>
          Add to Favorites
        </Button>
        <Button onClick={handleClick} seeRecipe>
          See Recipe
        </Button>
        <Button onClick={handleClick} subscribe>
          Subscribe
        </Button>
      </div>
    // </Container>
  );
};

export default НomePageTest;
