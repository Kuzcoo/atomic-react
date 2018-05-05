import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Field.scss';


export function Field({type, value, ...props}) {
  return (
      <input 
        className='field' 
        type={type}
        value={value}
        placeholder='Type something...'
        {...props} />
  );
}


Field.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
