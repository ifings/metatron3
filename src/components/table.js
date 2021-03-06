/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Table = ({ props, children, sx }) => (
  <table
    sx={{
      padding: 5,
      width: '100%',
      borderCollapse: 'collapse',
      ...sx,
    }}
    {...props}
  >
    {children}
  </table>
);

export default Table;
