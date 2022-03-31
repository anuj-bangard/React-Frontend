import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import './textDisplay.css';
export default function TextDisplay(props) {
  const { text } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Tooltip title={isClicked ? 'Copied' : 'Click to Copy'} placement="left">
      <div
        className="textBg"
        onClick={() => {
          setIsClicked(true);
        }}
      >
        <Typography variant="body1" className="bodyText">
          {text}
        </Typography>
      </div>
    </Tooltip>
  );
}
