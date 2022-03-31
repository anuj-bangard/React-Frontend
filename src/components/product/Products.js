import React from 'react';
import './products.css';
import MuiTitle from '../common/MuiTitle';
import Grid from '@mui/material/Grid';
import ProductCard from '../common/ProductCard';
import privacy from '../../assets/privacy.png';
import tnc from '../../assets/tnc.png';
import domain from '../../assets/domain.png';
import invoice from '../../assets/invoice.png';

export default function Products() {
  const products = [
    {
      src: privacy,
      alt: 'Privacy Policy Generator',
      title: 'Privacy Policy Generator',
      body: `Stock your store with 100s of products 
      and start selling to customers in minutes, 
      without the hassle of inventory or packaging.`,
    },
    {
      src: tnc,
      alt: 'Terms & Conditions Generator',
      title: 'Terms & Conditions Generator',
      body: `Stock your store with 100s of products 
      and start selling to customers in minutes, 
      without the hassle of inventory or packaging.`,
    },
    {
      src: domain,
      alt: 'Domain Name Generator',
      title: 'Domain Name Generator',
      body: `Stock your store with 100s of products 
      and start selling to customers in minutes, 
      without the hassle of inventory or packaging.`,
    },
    {
      src: invoice,
      alt: 'Invoice Generator',
      title: 'Invoice Generator',
      body: `Stock your store with 100s of products 
      and start selling to customers in minutes, 
      without the hassle of inventory or packaging.`,
    },
  ];
  return (
    <div className="productBg">
      <MuiTitle paddingBottom="5%">Try our other free products</MuiTitle>
      <Grid container spacing={5}>
        {products.map((product) => {
          const { src, alt, title, body } = product;
          return (
            <Grid item xs={12} md={4} key={title}>
              <ProductCard
                src={src}
                title={title}
                body={body}
                alt={alt}
                key={title}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
