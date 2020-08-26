import React, { useState, createRef } from 'react';
import ListItem from './ListItem';
import './List.css';
import { v4 as uuid } from 'uuid';

function List() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([
    { id: uuid(), title: 'Run', completed: true },
    { id: uuid(), title: 'Hit the gym', completed: true },
    { id: uuid(), title: 'Read a book', completed: false },
    { id: uuid(), title: 'Sex at the pool', completed: false },
  ]);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const inputElement = createRef();

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    const title = input;
    setItems([...items, { id: uuid(), title: title, completed: false }]);

    setInput('');
    inputElement.current.focus();
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const switchCompletedStatus = (id) => {
    setItems((prev) => {
      prev.map((item) => {
        return item.id !== id ? item : { ...item, completed: !item.completed };
      });
    });
  };

  const switchFilterCompleted = () => {
    setFilterCompleted(!filterCompleted);
  };
  return (
    <div className='list'>
      <h2 className='list__title'> New list</h2>

      <div className='list__search'>
        <div className='list__searchRow'>
          <input
            className='list__input'
            type='text'
            onChange={updateInput}
            value={input}
            ref={inputElement}
          />
          <button className='list__add' onClick={addItem}>
            Add
          </button>
        </div>
        <div className='list__searchRow'>
          <div>completed</div>
          <input
            className='list__filterCheckbox'
            type='checkbox'
            onClick={switchFilterCompleted}
          />
          <div>pending</div>
          <input className='list__filterCheckbox' type='checkbox' />
        </div>
      </div>

      <ul className='list__items'>
        {items.map((item) => {
          const currentItem = (
            <ListItem
              key={item.id}
              title={
                item.title + ` ${item.completed ? '[completed]' : '[pending]'}`
              }
              id={item.id}
              switchCompletedStatus={switchCompletedStatus}
              deleteItem={deleteItem}
            />
          );

          return filterCompleted && item.completed === false
            ? null
            : currentItem;
        })}
      </ul>

      <div className='list__footer'>
        <button className='list__footerSave'>Save</button>
        <button className='list__footerDelete'>Delete</button>
      </div>
    </div>
  );
}

export default List;
