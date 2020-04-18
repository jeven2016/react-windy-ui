import React, {Component} from 'react';
import {
  addWindowEventListener,
  removeWindowEventListener,
  preventEvent,
} from './event/EventFuntions';

export default class WindowEventComponent$ extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    addWindowEventListener('click', this.hide.bind(this));
  }

  componentWillUnmount() {
    removeWindowEventListener('click', this.hide.bind(this));
  }
}