import React, {Component} from 'react';
import {Button} from './Button';
import './ButtonGhost.scss';

export function ButtonGhost({className, children, ...props}) {
  return (
    <Button className={`button-ghost ${className}`}>{children}</Button>
  );
}

ButtonGhost.defaultProps = {
  className: ''
}