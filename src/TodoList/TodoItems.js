import React, { Component } from 'react';

export default class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    const todoItems = this.props.entries;
    const todoList = todoItems.map(this.createTasks);

    return <ul className='theList'>{todoList}</ul>;
  }
}
