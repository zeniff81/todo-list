import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import './ListItem.css';

function ListItem(props) {
  const [completed, setCompleted] = useState(false);

  const onClickHandler = () => {
    setCompleted(!completed);
  };

  const deleteClick = (e) => {
    e.stopPropagation();
    props.deleteItem(props.id);
  };

  const updateCompleted = (e) => {
    e.stopPropagation();
    setCompleted(!completed);
    props.switchCompletedStatus();
  };

  return (
    <div className='listItem' onClick={onClickHandler}>
      <div
        className={`listItem__title ${completed ? 'item__completed' : null}`}
      >
        {props.title}
      </div>
      <div className='listItem__actions'>
        <DeleteIcon className='listItem__deleteIcon' onClick={deleteClick} />
        <input type='checkbox' checked={completed} onChange={updateCompleted} />
      </div>
    </div>
  );
}

export default ListItem;
