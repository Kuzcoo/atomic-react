import React, {Component} from 'react';
import {Button} from './Button';
import './ButtonPrimary.scss';

export function ButtonPrimary({className, children, ...props}) {
  return (
    <Button className={`button-primary ${className}`}>{children}</Button>
  );
}

ButtonPrimary.defaultProps = {
  className: ''
}