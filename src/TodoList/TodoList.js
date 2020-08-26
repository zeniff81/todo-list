import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ text: 'moreno', key: Date.now() }],
      name: 'juan',
    };

    this._inputElement = React.createRef();

    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
    }

    this.setState((prevState) => {
      return { items: prevState.items.concat(newItem) };
    });

    this._inputElement.value = '';

    console.log(this.state.items);

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });

    this.setState({ items: filteredItems });
    console.log(this.state.name);
  }

  render() {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder='enter task'
            ></input>
            <button type='submit'>add</button>

            <TodoItems delete={this.delete} entries={this.state.items} />
          </form>
        </div>
      </div>
    );
  }
}
