import { useState, useEffect, useRef } from 'react';
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
  const modalRef = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPopupOpen, setIsPopupOpen, name]);

  const handlePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <UserLogoWrapper ref={modalRef}>
      <UserLogoBtn onClick={handlePopup}>
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
