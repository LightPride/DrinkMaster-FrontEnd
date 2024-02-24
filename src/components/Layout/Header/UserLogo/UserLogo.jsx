import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../../../../redux/auth/auth.selectors';

import {
  UserLogoWrapper,
  UserLogoText,
  UserLogoBtn,
  // UserLogoImg,
  UserLogoPlaceholder,
} from './UserLogo.styled';

import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';

const UserLogo = () => {
  const { name } = useSelector(selectUser);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPopupOpen]);

  const handlePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <UserLogoWrapper>
      <UserLogoBtn onClick={handlePopup}>
        {/* //HACK Удалить после того как с сервера начну получать картинки */}
        <UserLogoPlaceholder />

        <UserLogoText>{name}</UserLogoText>
      </UserLogoBtn>
      {isPopupOpen && (
        <UserLogoPopup
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </UserLogoWrapper>
  );
};

export default UserLogo;
