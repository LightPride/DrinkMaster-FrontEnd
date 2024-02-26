import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  height: 392px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 360px;
  margin-bottom: 14px;
  border-radius: 8px;
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.33;

  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SeeMore = styled(Link)`
  font-size: 14px;
  line-height: 1.125;
  color: var(--white-fifty-color);
  cursor: pointer;
  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
