import React from 'react';
import clsx from 'clsx';

export default class Accordion {

  static defaultProps = {
    className: 'accordion',
  };
  static propTypes = {};

  constructor(args) {
    this.state = {};
  }

  render() {
    const {className, block, children,  ...otherProps} = this.props;
    let clsName = clsx(className, {
      block,
    });
    return <>
      <div className={clsName}>
        {children}
      </div>
    </>;
  }

}