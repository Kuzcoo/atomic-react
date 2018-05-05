import React, {Component} from 'react';
import './Icon.scss';

export function CaretIcon({className}) {
  return (
    <svg className={className} width="10" height="8" viewBox="0 0 12 8">
      <path id="Polygon" d="M 7.20759 1.02937C 7.6079 0.509358 8.3921 0.509358 8.79241 1.02937L 13.6888 7.39001C 14.195 8.04757 13.7263 9 12.8964 9L 3.10358 9C 2.27374 9 1.80497 8.04757 2.31117 7.39001L 7.20759 1.02937Z" transform="matrix(-1 -9.29798e-08 8.21979e-08 -1 14 9)" fill="inherit"/>
    </svg>
  );
}