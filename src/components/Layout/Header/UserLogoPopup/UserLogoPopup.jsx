import {
  LogOutBtn,
  StyledTypography,
  StyledPopupWindow,
} from './UserLogoPopup.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../../../redux/auth/auth.operations';
import { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { LogOutModal } from '../LogOutModal/LogOutModal';

export const UserLogoPopup = ({ isPopupOpen, setIsPopupOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const [isLogOutOpen, SetLogOutOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // UNDONE ===================================================================
    if (isLogOutOpen) {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen, setIsPopupOpen, isLogOutOpen]);

  const handleLogout = (values) => {
    try {
      dispatch(logOutThunk(values));
      navigate('/welcome');
    } catch (error) {
      navigate('/welcome');
    }
  };

  const handleLogOutClick = () => {
    SetLogOutOpen((prev) => !prev);
  };

  return (
    <>
      <StyledPopupWindow>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '38px',
          }}
        >
          <StyledTypography>Edit profile</StyledTypography>
          <IconButton>
            <EditIcon
              sx={{ width: '14px', height: '14px', color: '#F3F3F3' }}
            />
          </IconButton>
        </Box>
        <LogOutBtn onClick={handleLogOutClick}>Log out</LogOutBtn>
      </StyledPopupWindow>
      {isLogOutOpen && (
        <LogOutModal
          isOpen={isLogOutOpen}
          onLogOut={handleLogout}
          onClose={handleLogOutClick}
        ></LogOutModal>
      )}
    </>
  );
};
