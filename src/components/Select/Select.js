import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from '../Field/Field';
import {List} from '../List/List';
import {ListItem} from '../ListItem/ListItem';
import {CaretIcon} from '../Icons/CaretIcon'; 
import './Select.scss';

export function Select({
  className,
  value,
  options, 
  defaultValue, 
  onClickList, 
  onBlurList, 
  onChooseItem,
  onChangeValue,
  onKeyDown,
  isOpen,
  combo
}) {
  return (
    <div 
      className={'select' + (isOpen ? ' is-open' : '') + ' ' + className}
      onKeyDown={onKeyDown}
      onBlur={onBlurList}>
      <CaretIcon className='select__caret' />
      <Field 
        type='text' 
        readonly={combo ? null : 'true'}
        value={value} 
        placeholder={defaultValue}
        onMouseDown={onClickList} 
        onChange={e => !!onChangeValue && onChangeValue(e.target.value)}/>
      <List className='select__list'>
        {options.map(option => (
          <ListItem
            onMouseDown={() => onChooseItem(option.name)}>
            {option.name}
          </ListItem>
        ))}
      </List>
    </div>
  );    
}

Select.defaultProps = {
  className: ''
};
