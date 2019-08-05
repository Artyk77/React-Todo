// your components will all go in this `component` directory.

import React from 'react';
import Todo from './Todo';
import './Todo.css';

// feel free to change this component.js into TodoList.js
const TodoList = props => (
    <div className="ui segment">
     
      <div className="ui relaxed list">
        {props.taskList.map(t => (
          <Todo
            task={t}
            toggleTodoCompletion={props.toggleTodoCompletion}
            key={t.id}
          />
        ))}
      </div>
    </div>
  );
  export default TodoList;