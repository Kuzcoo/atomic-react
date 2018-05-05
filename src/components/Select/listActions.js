import React, {Component} from 'react';

const KEY = {
  ENTER: 13,
  SPACE: 32
};

export function listActions(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        isOpen: false
      };

      this.toggleList = this.toggleList.bind(this);
      this.closeList = this.closeList.bind(this);
      this.handleKey = this.handleKey.bind(this);
    }

    toggleList() {
      console.log('toggleList')
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }

    closeList() {
      this.setState({
        isOpen: false
      });
    }

    handleKey(e) {
      switch (e.keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
          this.toggleList();
        break;
      }
    }

    render() {
      const {options, defaultValue, ...props} = this.props;
      const {isOpen} = this.state;

      return (
        <WrappedComponent
          isOpen={isOpen}
          options={options}
          defaultValue={defaultValue}
          onKeyDown={this.handleKey}
          onBlurList={this.closeList}
          onClickList={this.toggleList}
          {...props}
        />
      );
    }
  }
}