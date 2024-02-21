import {
  LogOutBtn,
  StyledTypography,
  StyledPopupWindow,
} from './UserLogoPopup.styled';

import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';

export const UserLogoPopup = ({ isPopupOpen, setIsPopupOpen }) => {
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
      <LogOutBtn>Log out</LogOutBtn>
    </StyledPopupWindow>
  );
};
