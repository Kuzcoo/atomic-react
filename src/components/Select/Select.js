import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from '../Field/Field';
import {List} from '../List/List';
import {ListItem} from '../ListItem/ListItem';
import {CaretIcon} from '../Icons/CaretIcon'; 
import './Select.scss';

export function Select({
  id,
  className,
  value,
  activeDescendant,
  options, 
  defaultValue, 
  onClickList, 
  onBlurList, 
  onChooseItem,
  onChangeValue,
  onKeyDown,
  onFocus,
  focusIndex,
  isFocus,
  isOpen,
  combobox
}) {
  return (
    <div
      id={id}
      className={'select' + (isOpen ? ' is-open' : '') + ' ' + className}
      onKeyDown={onKeyDown}
      onBlur={onBlurList}>
      <CaretIcon className='select__caret' />
      <Field 
        type='text' 
        readonly={combobox ? null : 'true'}
        value={value} 
        placeholder={defaultValue}
        aria-owns={`${id}-list`}
        aria-activedescendant={activeDescendant}
        onMouseDown={onClickList}
        onFocus={onFocus}
        onChange={e => !!onChangeValue && onChangeValue(e.target.value)}/>
      <List id={`${id}-list`} className='select__list'>
        {options.map( (option, i) => (
          <ListItem
            key={`${id}-list-item-${i}`}
            id={`${id}-list-item-${i}`}
            className={(focusIndex === i ? 'is-focus' : '')}
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

Select.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  activeDescendant: PropTypes.string.isRequired
};
