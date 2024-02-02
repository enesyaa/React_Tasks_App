import { useState } from "react";
import "./App.css";
import { TaskCreate } from "./components/TaskCreate";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(title, desc) {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        desc,
      },
    ];
    setTasks(createdTasks);
  }
  const DeleteById = (id) => {
    const UpdatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(UpdatedTasks);
  };
  const editTaskbyId = (id, updatedTitle, updatedDesc) => {
    const UpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, desc: updatedDesc };
      }
      return task;
    });
    setTasks(UpdatedTasks);
  };

  return (
    <div className="app">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>

      <TaskList tasks={tasks} ondelete={DeleteById} onUpdate={editTaskbyId} />
    </div>
  );
}

export default App;
