import React from 'react';
import MuiBodyText from './MuiBodyText';
import MuiH5 from './MuiH5';
import './productCard.css';

export default function ProductCard(props) {
  const { src, alt, title, body } = props;
  return (
    <div>
      <img src={src} alt={alt} className="productImg" />
      <MuiH5 className="productCardTitle">{title}</MuiH5>
      <MuiBodyText className="productCardBody">{body}</MuiBodyText>
    </div>
  );
}
