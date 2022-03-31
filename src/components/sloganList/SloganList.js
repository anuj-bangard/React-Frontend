import React, { useState } from 'react';
import MuiH5 from '../common/MuiH5';
import './sloganList.css';
import MuiButton from '../common/MuiButton';
import { Grid, Pagination } from '@mui/material';
import TextDisplay from '../common/TextDisplay';

export default function SloganList(props) {
  const { data, searchString } = props;
  const [dataToShow, setDataToShow] = useState(data.slice(0, 18));
  const totalCount = '1,023';
  const handlePageChange = (e, value) => {
    setDataToShow(data.slice(18 * (value - 1), 18 * value));
  };
  return (
    <div>
      <div className="sloganDivider"></div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={9}>
          <MuiH5 className="sloganListSubHeading">
            We have generated {totalCount} slogans for “{searchString}”
          </MuiH5>
        </Grid>
        <Grid item xs={12} md={3} textAlign="end">
          <MuiButton className="downloadBtn">Download all</MuiButton>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid item md={6}>
          {dataToShow.map((slogan, index) => {
            return index % 2 === 0 ? (
              <TextDisplay text={slogan} key={index} />
            ) : (
              ''
            );
          })}
        </Grid>
        <Grid item md={6}>
          {dataToShow.map((slogan, index) => {
            return index % 2 !== 0 ? (
              <TextDisplay text={slogan} key={index} />
            ) : (
              ''
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid item xs={12}>
          {dataToShow.map((slogan, index) => {
            return <TextDisplay text={slogan} key={index} />;
          })}
        </Grid>
      </Grid>
      <div className="sloganDivider"></div>
      <Pagination
        count={21}
        color="primary"
        boundaryCount={1}
        siblingCount={0}
        hidePrevButton={true}
        onChange={handlePageChange}
      />
    </div>
  );
}
