import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete}) => {
  return (
    <div className='Todo'>
        <p 
          className={`${task.completed ? 'completed':  ''}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} />
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
    </div>
  )
}

