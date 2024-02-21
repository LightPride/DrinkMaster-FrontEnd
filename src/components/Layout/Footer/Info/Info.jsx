import {
  InfoContainer,
  InfoContPriv,
  InfoUl,
  InfoLi,
  InfoText,
} from './Info.styled';

export const Info = () => {
  return (
    <InfoContainer>
      <InfoText>©2023 Drink Master. All rights reserved.</InfoText>
      <InfoContPriv>
        <InfoUl>
          <InfoLi>
            <a href="" rel="noreferrer noopener" target="_blank">
              Privacy Policy
            </a>
          </InfoLi>
          <InfoLi>
            <a href="" rel="noreferrer noopener" target="_blank">
              Terms of Service
            </a>
          </InfoLi>
        </InfoUl>
      </InfoContPriv>
    </InfoContainer>
  );
};
export default Info;
