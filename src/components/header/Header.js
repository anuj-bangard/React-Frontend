import React from 'react';
import './header.css';
import logo from '../../assets/white.png';
import { Grid } from '@mui/material';
import MuiButton from '../common/MuiButton';

export default function Header() {
  return (
    <div className="navbar headerBg">
      <Grid container spacing={2} alignItems="center" className="mobileGrid">
        <Grid item xs={12} md={6}>
          <img src={logo} alt="dukaan logo" />
        </Grid>
        <Grid item xs={12} md={6} textAlign="end">
          <MuiButton variant="text" className="headerBtnSignIn">
            Sign In
          </MuiButton>
          <MuiButton variant="outlined" className="headerBtnPc">
            Dukaan For PC
          </MuiButton>
        </Grid>
      </Grid>
    </div>
  );
}
