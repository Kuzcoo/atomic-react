import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.scss';


export function List({className, children}) {
  return (
      <ul className={`list ${className}`}>
        {children}
      </ul>
  );
}

List.propTypes = {
  className: PropTypes.string
}
