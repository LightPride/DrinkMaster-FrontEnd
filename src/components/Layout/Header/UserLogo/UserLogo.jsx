import { UserLogoWrapper, UserLogoText, UserLogoBtn } from './UserLogo.styled';
import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';

const UserLogo = () => {
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
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <UserLogoText>Filatov Serhey</UserLogoText>
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
