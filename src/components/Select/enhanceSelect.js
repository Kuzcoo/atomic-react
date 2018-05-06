import React, {Component} from 'react';

const KEY = {
  ENTER: 13,
  ESC: 27,
  SPACE: 32,
  UP: 38,
  DOWN: 40
};

export function enhanceSelect(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        focusIndex: -1
      };

      if (this.props.combobox) this.state.options = this.props.options;

      this.toggleList = this.toggleList.bind(this);
      this.closeList = this.closeList.bind(this);
      this.openList = this.openList.bind(this);
      this.handleKey = this.handleKey.bind(this);
      this.handleKey = this.handleKey.bind(this);
      this.onChangeValue = this.onChangeValue.bind(this);
    }

    toggleList() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        focusIndex: -1
      }));
    }

    closeList() {
      this.setState({
        isOpen: false,
        focusIndex: -1
      });
    }

    openList() {
      this.setState({
        isOpen: true,
        focusIndex: -1
      });
    }

    handleKey(e) {
      switch (e.keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
          if (!this.isListOpen()) {
            this.openList();
          } else {
            if (this.state.focusIndex >= 0) {
              this.props.onChooseItem(
                this.getOptions()[this.state.focusIndex].name
              );              
            }

            this.closeList();
          }
        break;
        case KEY.ESC:
          this.closeList();
        break;
        case KEY.DOWN:
          if (!this.isListOpen()) {
            this.openList()
          } else {
            this.getNextItem();
          }
        break;
        case KEY.UP:
          if (this.isListOpen()) {
            this.getPrevItem();
          }
        break;
      }
    }

    getNextItem() {
      this.setState(prevState => ({
        focusIndex: Math.min(prevState.focusIndex + 1, this.props.options.length - 1)
      }));
    }

    getPrevItem() {
      this.setState(prevState => ({
        focusIndex: Math.max(prevState.focusIndex - 1, 0)
      }));
    }

    filterListByValue(value) {
      let regexp = new RegExp(value.toLowerCase(), 'g');
      return this.props.options.filter(item => {
        return regexp.test(item.name.toLowerCase());
      });
    }

    onFilterByValue(value) {
      this.setState({
        isOpen: true,
        options: this.filterListByValue(value)
      });
    }

    getOptions() {
      return this.props.combobox && this.state.options || this.props.options;
    }

    getActiveDescendant() {
      const {focusIndex} = this.state;

      if (focusIndex === -1) return null;

      return `${this.props.id}-item-${focusIndex}`;
    }

    onChangeValue(value) {
      this.props.onChange(value);

      if (this.props.combobox) {
        this.onFilterByValue(value);
      }
    }

    isListOpen() {
      return this.state.isOpen;
    }

    render() {
      const {options, defaultValue, ...props} = this.props;
      const {isOpen, focusIndex} = this.state;

      return (
        <WrappedComponent
          isOpen={isOpen}
          activeDescendant={this.getActiveDescendant()}
          options={this.getOptions()}
          defaultValue={defaultValue}
          onKeyDown={this.handleKey}
          onBlurList={this.closeList}
          onClickList={this.toggleList}
          onChangeValue={this.onChangeValue}
          focusIndex={focusIndex}
          onFocus={e => this.props.combobox && this.openList()}
          {...props}
        />
      );
    }
  }
}