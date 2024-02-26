import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { setPage } from '../../redux/drinks/drinks.reducer';
import { useMediaRules } from '../../hooks/useMediaRules';
import { selectPage, selectTotal } from '../../redux/drinks/drinks.selectors';

export const Paginator = () => {
  let page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { isMobile, isDesktop } = useMediaRules();
  const total = useSelector(selectTotal);
  const size = isDesktop ? 9 : 8;
  const totalPages = Math.ceil(total / size);
  const defaultPage = Math.ceil(totalPages / 2);

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        marginTop: isMobile ? '40px' : '80px',
      }}
    >
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, num) => dispatch(setPage(num))}
          defaultPage={defaultPage}
          boundaryCount={1}
          siblingCount={1}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          sx={{
            marginX: 'auto',
            '& .MuiPaginationItem-root': {
              fontSize: '12px',
              fontWeight: '500',
              color: 'white',
              transition: 'background 0.3s ease',
              '&:hover': {
                background: 'rgba(64, 112, 205, 0.4)',
              },
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              background: 'rgba(64, 112, 205, 0.4)',
            },
            'Ul.MuiPagination-ul': {
              flexWrap: 'nowrap',
            },
          }}
        />
      )}
    </Box>
  );
};

export default Paginator;
