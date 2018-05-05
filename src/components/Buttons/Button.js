import React, {Component} from 'react';
import './Button.scss';

export function Button({className, children, ...props}) {
  return (
    <button className={`button ${className}`}>{children}</button>
  );
}

Button.defaultProps = {
  className: ''
}