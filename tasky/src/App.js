import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Medium", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "High", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "Low", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  }

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    priority: "",
    deadline: ""
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      ...formState,
      id: uuidv4(),
    };

    setTaskState((prevState) => ({
      tasks: [...prevState.tasks, newTask]
    }));

  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm 
        submit={formSubmitHandler} 
        change={formChangeHandler} 
        formState={formState}  // Pass formState to the form
      />
    </div>
  );
}

export default App;
