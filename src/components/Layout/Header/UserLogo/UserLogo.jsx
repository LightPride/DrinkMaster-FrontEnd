import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { selectUser } from '../../../../redux/auth/auth.selectors';

import { UserLogoWrapper, UserLogoText, UserLogoBtn } from './UserLogo.styled';
import { UserLogoPopup } from '../UserLogoPopup/UserLogoPopup';
import Avatar from '@mui/material/Avatar';

const UserLogo = () => {
  // const { name } = useSelector(selectUser);
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
        <Avatar alt="No Name User" src="/static/images/avatar/1.jpg" />
        <UserLogoText>No Name User</UserLogoText>
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
