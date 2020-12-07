import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import { paginate } from '../../utils';

import styles from './styles';

export default function Paginate({ updatePage }) {
  const classes = styles();
  const [page, setPage] = useState(1);

  const handleChange = useCallback((_, page) => {
    setPage(page);
    updatePage({ page, limit: paginate });
  }, [updatePage]);

  return (
    <footer>
      <Box my={4} className={classes.containerFooter}>
        <Pagination page={page} count={paginate} className={classes.pagination} onChange={handleChange} shape="rounded" size="large" showFirstButton={false} hidePrevButton showLastButton/>
      </Box>
    </footer>
  );
}
