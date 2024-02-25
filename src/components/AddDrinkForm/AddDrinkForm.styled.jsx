import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 20px;

  .buttonAdd {
    outline: none;
    border: none;
    border-radius: 42px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* padding: 14px 40px; */
    width: 107px;
    height: 46px;
    background: #f3f3f3;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: #161f37;
    transition: background 0.3s ease;
    @media screen and (min-width: 768px) {
      /* padding: 18px 44px; */
      width: 118px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
    &:hover {
      background: rgba(64, 112, 205, 0.5);
      color: #f3f3f3;
    }
    &:disabled {
      animation: changeColor 0.5s infinite alternate;
    }
    @keyframes changeColor {
      0% {
        background-color: rgba(64, 111, 205, 0.76); /* Початковий колір */
      }
      100% {
        background-color: rgba(
          64,
          112,
          205,
          0.5
        ); /* Кінцевий колір, повторення анімації */
      }
    }
  }
`;
