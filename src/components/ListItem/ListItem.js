import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';


export function ListItem({className, children, ...props}) {
  return (
      <li className={`list-item ${className}`} {...props} >
        {children}
      </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string
}
