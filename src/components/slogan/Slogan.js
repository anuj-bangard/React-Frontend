import React, { useState } from 'react';
import './slogan.css';
import { OutlinedInput, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiButton from '../common/MuiButton';
import SloganList from '../sloganList/SloganList';
import { data } from '../../data/data';
import MuiH5 from '../common/MuiH5';
import MuiBodyText from '../common/MuiBodyText';
import MuiTitle from '../common/MuiTitle';

export default function Slogan() {
  const [value, setValue] = useState('cozy');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const clearInput = (e) => {
    setValue('');
  };

  return (
    <div className="sloganBg">
      <MuiTitle className="heading">Free Slogan Maker</MuiTitle>
      <MuiH5 className="subHeading" fontFamily="GalanoGrotesque">
        Simply enter a term that describes your business, and get up to 1,000
        relevant slogans for free.
      </MuiH5>
      <MuiBodyText className="subtext">Word for your slogan</MuiBodyText>
      <OutlinedInput
        id="searchString"
        name="searchString"
        value={value}
        onChange={handleInputChange}
        endAdornment={
          value === '' ? (
            ''
          ) : (
            <InputAdornment position="end">
              <CloseIcon onClick={clearInput} className="icon" />
            </InputAdornment>
          )
        }
        aria-describedby="searchString"
      />
      <MuiButton variant="contained" className="generateSloganBtn">
        Generate Slogan
      </MuiButton>
      <SloganList data={data} searchString={value} />
    </div>
  );
}
