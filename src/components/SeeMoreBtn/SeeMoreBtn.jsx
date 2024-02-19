import { Link } from 'react-router-dom';
import { SeeMoreButton } from './SeeMoreBtn.styled';

const SeeMoreBtn = ({ navLink }) => {
  return (
    <Link to={navLink}>
      <SeeMoreButton type="button">See more</SeeMoreButton>
    </Link>
  );
};

export default SeeMoreBtn;
