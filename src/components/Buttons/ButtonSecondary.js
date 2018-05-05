import React, {Component} from 'react';
import {Button} from './Button';
import './ButtonSecondary.scss';

export function ButtonSecondary({className, children, ...props}) {
  return (
    <Button className={`button-secondary ${className}`}>{children}</Button>
  );
}

ButtonSecondary.defaultProps = {
  className: ''
}