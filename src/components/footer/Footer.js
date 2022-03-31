import React from 'react';
import './footer.css';
import Grid from '@mui/material/Grid';
import logo from '../../assets/white.png';
import { Badge, List, ListItem, ListItemText } from '@mui/material';
import MuiBodyText from '../common/MuiBodyText';
import flag from '../../assets/flag.png';

export default function Footer() {
  function generate(text) {
    return (
      <List>
        <ListItem>
          <ListItemText
            primary={text}
            sx={{ color: 'white' }}
            class="linkHover"
          />
        </ListItem>
      </List>
    );
  }
  return (
    <div className="footerBg">
      <Grid container spacing={1} className="footerGrid" direction="row">
        <Grid item xs={12} md={2} marginRight="8%">
          <img src={logo} alt="logo" className="footerImg" />
        </Grid>
        <Grid item xs={4} md={2}>
          {generate('Contact')}
          {generate("FAQ's")}
        </Grid>
        <Grid item xs={4} md={2}>
          {generate('Tutorials')}
          {generate('Blog')}
        </Grid>
        <Grid item xs={4} md={2}>
          {generate('Privacy')}
          {generate('Banned Items')}
        </Grid>
        <Grid item xs={4} md={2}>
          {generate('About')}
          <List>
            <ListItem>
              <Badge badgeContent={3} color="primary">
                <ListItemText primary="Jobs" sx={{ color: 'white' }} />
              </Badge>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4} md={1}>
          {generate('Facebook')}
          {generate('Twitter')}
          {generate('LinkedIn')}
        </Grid>
      </Grid>
      <div className="footerLine"></div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8} md={5}>
          <MuiBodyText color="white" fontSize="0.875rem">
            Dukaan 2020, All rights reserved.
          </MuiBodyText>
        </Grid>
        <Grid item xs={4} md={7} textAlign="end">
          <div className="footerFlag">
            <MuiBodyText marginRight="10px" color="white" fontSize="0.875rem">
              Made In
            </MuiBodyText>
            <img src={flag} alt="india flag" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
