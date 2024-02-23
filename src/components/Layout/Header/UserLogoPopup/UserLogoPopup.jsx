import {
  LogOutBtn,
  StyledTypography,
  StyledPopupWindow,
} from './UserLogoPopup.styled';

import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import { logOutThunk } from '../../../../redux/auth/auth.operations';
import { useDispatch } from 'react-redux';

export const UserLogoPopup = ({ isPopupOpen, setIsPopupOpen }) => {
  const dispatch = useDispatch();
  console.log('Сработала кнопка!', isPopupOpen);
  console.log(setIsPopupOpen);

  return (
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
          <EditIcon sx={{ width: '14px', height: '14px', color: '#F3F3F3' }} />
        </IconButton>
      </Box>
      <LogOutBtn
        onClick={() => {
          dispatch(logOutThunk());
        }}
      >
        Log out
      </LogOutBtn>
    </StyledPopupWindow>
  );
};
