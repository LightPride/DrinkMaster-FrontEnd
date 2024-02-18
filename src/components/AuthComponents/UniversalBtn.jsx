import React from 'react';
import { StyledSignForm } from './Styled';

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
    <StyledSignForm
      backgroundcolor={backgroundcolor}
      color={color}
      width={width}
      margin={margin}
      backgroundcolorhover={backgroundcolorhover}
      colorhover={colorhover}
      borderhover={borderhover}
    >
      <button className="universalBtn" type={type}>
        {title}
      </button>
    </StyledSignForm>
  );
};

export default UniversalBtn;
