// src/TodoList.js
import React from 'react';

const TodoList = ({ tasks, onToggleStatus }) => {
  const calculateTaskColor = (task) => {
    const now = new Date();
    if (task.status === 'completed') {
      return 'green';
    } else if (new Date(task.deadline) < now) {
      return 'red';
    } else {
      return 'grey';
    }
  };

  return (
    <div id="task-list">
      {tasks.map((task, index) => (
        <div key={index} className={`task ${calculateTaskColor(task)}`}>
          <div>
            Task: {task.name}, Deadline: {new Date(task.deadline).toLocaleString()}
          </div>
          <button onClick={() => onToggleStatus(index)}>
            {task.status === 'completed' ? 'Completed' : 'Mark as Completed'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default  TodoList;
