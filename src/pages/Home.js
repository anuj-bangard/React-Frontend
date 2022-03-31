import React from 'react';
import Feature from '../components/feature/Feature';
import Products from '../components/product/Products';
import Slogan from '../components/slogan/Slogan';

function Home() {
  return (
    <>
      <Slogan />
      <Feature />
      <Products />
    </>
  );
}

export default Home;
