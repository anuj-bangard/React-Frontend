import { Typography } from '@mui/material';
import React from 'react';

export default function MuiH5(props) {
  const { ...others } = props;
  return (
    <div>
      <Typography
        variant="h5"
        fontSize="1.25rem"
        lineHeight="28px"
        fontFamily="GalanoGrotesqueMedium"
        {...others}
      >
        {props.children}
      </Typography>
    </div>
  );
}
