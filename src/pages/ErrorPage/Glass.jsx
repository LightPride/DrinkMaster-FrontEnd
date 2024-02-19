import coctailPNG from '../../shared/components/NotAdd/img/notFound.png';
import coctailWEBP from '../../shared/components/NotAdd/img/notFound.webp';
import coctail2x from '../../shared/components/NotAdd/img/notFound@2x.png';
import { StyledImage } from './ErrorPage.styled';

const Glass = () => {
  return (
    <picture>
      <source srcSet={`${coctailWEBP} 1x, ${coctail2x} 2x`} type="image/webp" />
      <source srcSet={`${coctailPNG}`} type="image/jpeg" />
      <StyledImage
        src={coctailPNG}
        alt="Coctail"
        width="123"
        height="156"
        loading="lazy"
      />
    </picture>
  );
};

export default Glass;