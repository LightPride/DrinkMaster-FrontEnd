import { useEffect, useRef } from 'react';

import {
  StyledLogOutWrapper,
  StyledPar,
  StyledButtonsWrapper,
  LogOutModalBtn,
  CloseModalBtn,
  StyledCloseIcon,
} from './LogOutModal.styled';

export const LogOutModal = ({ isOpen, onClose, onLogOut }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose(false);
      }
    };

    if (isOpen) {
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
  }, [isOpen, onClose]);

  return (
    <StyledLogOutWrapper ref={modalRef}>
      <StyledCloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
      <StyledPar>Are you sure you want to log out?</StyledPar>
      <StyledButtonsWrapper>
        <LogOutModalBtn onClick={onLogOut}>Log out</LogOutModalBtn>
        <CloseModalBtn onClick={onClose}>Cancel</CloseModalBtn>
      </StyledButtonsWrapper>
    </StyledLogOutWrapper>
  );
};
