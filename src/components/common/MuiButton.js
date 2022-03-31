import React from 'react';
import Button from '@mui/material/Button';

export default function MuiButton(props) {
  const { variant, ...others } = props;
  return (
    <Button
      variant={variant || 'outlined'}
      {...others}
      sx={{ textTransform: 'unset ', marginLeft: '10px', marginRight: '10px' }}
    ></Button>
  );
}
