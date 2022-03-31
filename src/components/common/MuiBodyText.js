import React from 'react';
import Typography from '@mui/material/Typography';

export default function MuiBodyText(props) {
  const { color, sx, ...others } = props;
  return (
    <div>
      <Typography variant="body1" color={color || 'black'} {...others}>
        {props.children}
      </Typography>
    </div>
  );
}
