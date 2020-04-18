import React, {Component} from 'react';
import {isNil} from './Utils';

export default class Tab extends Component {
  /*
      static propTypes = {
          items: PropTypes.array,
          activeItem: PropTypes.string,
          defaultActiveItem: PropTypes.string,
          onChange: PropTypes.func
      };
  */

  isValidValue(val) {
    return !isNil(val);
  }

  render() {
    const {items, activeItem, defaultActiveItem, onChange} = this.props;
    if (!items || items.length == 0) {
      return null;
    }
    let activatedItem;
    if (this.isValidValue(activeItem)) {
      activatedItem = activeItem;
    } else if (this.isValidValue(defaultActiveItem)) {
      activatedItem = defaultActiveItem;
    } else {
      activatedItem = items[0].id;
    }

    let content = items.find(item => item.id === activatedItem).content;

    return (
        <div>
          <div className="tab">
            <ul className="top menu ">
              {
                items.map((item, i) => {
                  let itemClass = item.id === activatedItem
                      ? 'item active'
                      : 'item';
                  return (<li key={`${item.id}-${i}`}
                              onClick={evt => onChange(item.id, evt)}
                              className={itemClass}>
                    {item.icon}&nbsp;{item.label}
                  </li>);
                })
              }
            </ul>
          </div>
          {content}
        </div>
    );
  }

}
