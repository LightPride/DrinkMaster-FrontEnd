import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const UserLogoText = styled.p`
  color: var(--white-color);
  font-family: 'Manrope-500';
  font-size: 14px;
  line-height: 129%;
  margin-right: 14px;
  transition: color 200ms ease;
  &:hover,
  &:focus {
    color: var(--white-fifty-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;

export const UserLogoImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  height: 38px;
  width: 38px;
`;

//HACK Удалить после того как с сервера начну получать картинки
export const UserLogoPlaceholder = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11829_1354)">
        <rect
          width="100"
          height="100"
          rx="50"
          fill="#F3F3F3"
          fillOpacity="0.952941"
        />
        <circle cx="50.6394" cy="47.8557" r="15.8557" fill="#939FC0" />
        <path
          d="M89 101.688C89 96.5668 87.9912 91.4954 86.0313 86.7637C84.0714 82.032 81.1986 77.7327 77.5772 74.1112C73.9557 70.4897 69.6563 67.617 64.9247 65.657C60.193 63.6971 55.1216 62.6883 50 62.6883C44.8784 62.6883 39.807 63.6971 35.0753 65.657C30.3436 67.617 26.0443 70.4897 22.4228 74.1112C18.8013 77.7327 15.9286 82.032 13.9687 86.7637C12.0088 91.4954 11 96.5668 11 101.688L50 101.688H89Z"
          fill="#939FC0"
        />
      </g>
      <defs>
        <clipPath id="clip0_11829_1354">
          <rect width="100" height="100" rx="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
