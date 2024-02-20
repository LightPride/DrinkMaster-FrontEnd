import coctailPNG1 from '../../images/404Images/blueIced@1xDesk.png';
import coctailPNG2 from '../../images/404Images/blueIced@2xDesk.png';

import { StyledImage } from './ErrorPage.styled';

const Glass = () => {
  return (
    <picture>
      <source
        srcSet={`${coctailPNG1} 1x, ${coctailPNG2} 2x`}
        type="image/png"
      />
      <source srcSet={`${coctailPNG1}`} type="image/png" />
      <StyledImage
        src={coctailPNG1}
        alt="Coctail"
        width="123"
        height="156"
        loading="lazy"
      />
    </picture>
  );
};

export default Glass;
