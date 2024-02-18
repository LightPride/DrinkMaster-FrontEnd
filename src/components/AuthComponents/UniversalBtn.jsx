import React from 'react';
import { StyledSignForm } from './Styled';

const UniversalBtn = ({
  margin,
  backgroundColor,
  color,
  width,
  title,
  type,
  backgroundColorHover,
  colorHover,
  borderHover,
}) => {
  return (
    <StyledSignForm
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      margin={margin}
      backgroundColorHover={backgroundColorHover}
      colorHover={colorHover}
      borderHover={borderHover}
    >
      <button className="universalBtn" type={type}>
        {title}
      </button>
    </StyledSignForm>
  );
};

export default UniversalBtn;
