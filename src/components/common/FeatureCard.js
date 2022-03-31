import React from 'react';
import MuiH5 from './MuiH5';
import './featureCard.css';
import MuiBodyText from './MuiBodyText';

export default function FeatureCard(props) {
  const { src, alt, title, body } = props;
  return (
    <div>
      <img src={src} alt={alt} className="featureImg" />
      <MuiH5 className="featureCardTitle">{title}</MuiH5>
      <MuiBodyText className="featureCardBody">{body}</MuiBodyText>
    </div>
  );
}
