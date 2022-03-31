import React from 'react';
import Typography from '@mui/material/Typography';

export default function MuiTitle(props) {
  const { ...others } = props;
  return (
    <div>
      <Typography
        variant="h1"
        fontWeight="600"
        fontSize="2.25rem"
        lineHeight="2.625rem"
        letterSpacing="-0.04em"
        color="#1A181E"
        {...others}
      >
        {props.children}
      </Typography>
    </div>
  );
}
