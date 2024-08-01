import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p 
          className={`${task.completed ? 'completed':  ''}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

