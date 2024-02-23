import styled from 'styled-components';

import notFound1_sm from '../../images/404Images/blueIced@1xMob.png';
import NotFound2_sm from '../../images/404Images/blueIced@2xMob.png';
import NotFound1_md from '../../images/404Images/blueIced@1xTab.png';
import NotFound2_md from '../../images/404Images/blueIced@2xTab.png';
import NotFound1_lr from '../../images/404Images/blueIced@1xDesk.png';
import NotFound2_lr from '../../images/404Images/blueIced@2xDesk.png';

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
`;

export const NotFoundText = styled.p`
  color: var(--white-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 137.5% */
  width: 205px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 236px;
    line-height: 22px;
  }
`;
export const NotFoundImage = styled.div`
  width: 198px;
  height: 247px;
  background-image: url(${notFound1_sm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${NotFound2_sm});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${NotFound1_md});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${NotFound2_md});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${NotFound1_lr});
    width: 261px;
    height: 326px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${NotFound2_lr});
  }
`;
