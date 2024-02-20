import styled from 'styled-components';

const Gradient = ({ color, top, left }) => {
  const StyledGradient = styled.div`
    width: 320px;
    height: 320px;
    border-radius: 320px;
    background: var(${color}, rgba(188, 230, 210, 0.4));
    filter: blur(130px);
    position: absolute;
    top: ${top};
    left: ${left};
  `;

  return <StyledGradient />;
};

export default Gradient;
