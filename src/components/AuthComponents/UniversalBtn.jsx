import { StyledUniversalBtn } from './Styled';

const UniversalBtn = ({
  margin,
  backgroundcolor,
  color,
  width,
  title,
  type,
  backgroundcolorhover,
  colorhover,
  borderhover,
}) => {
  return (
    <StyledUniversalBtn
      backgroundcolor={backgroundcolor}
      color={color}
      width={width}
      margin={margin}
      backgroundcolorhover={backgroundcolorhover}
      colorhover={colorhover}
      borderhover={borderhover}
      type={type}
    >
      {title}
    </StyledUniversalBtn>
  );
};

export default UniversalBtn;
