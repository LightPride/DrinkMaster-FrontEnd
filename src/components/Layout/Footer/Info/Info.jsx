import {
  InfoContainer,
  InfoContPriv,
  InfoUl,
  InfoLi,
  InfoText,
  InfoLink,
} from './Info.styled';

export const Info = () => {
  return (
    <InfoContainer>
      <InfoText>©2023 Drink Master. All rights reserved.</InfoText>
      <InfoContPriv>
        <InfoUl>
          <InfoLi>
            <InfoLink to="/policy"> Privacy Policy</InfoLink>
          </InfoLi>
          <InfoLi>
            <InfoLink to="/service"> Terms of Service</InfoLink>
          </InfoLi>
        </InfoUl>
      </InfoContPriv>
    </InfoContainer>
  );
};
export default Info;
