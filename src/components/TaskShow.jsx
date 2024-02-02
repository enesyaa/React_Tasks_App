import React, { useState } from "react";
import { TaskCreate } from "./TaskCreate";

export const TaskShow = ({ task, ondelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = (e) => {
    ondelete(task.id);
    e.preventDefault();
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setShowEdit();
    onUpdate(id, updatedTitle, updatedDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="task-create ">
          <h3>Task {task.id}</h3>
          <form className="task-form">
            <label className="task-label">Task</label>

            <p className="task-p">{task.title}</p>
            <label className="task-label">Enter Task Details</label>
            <p className="task-p">{task.desc}</p>
            <div className="btn-group">
              <button className="task-btn" onClick={handleEditClick}>
                Edit
              </button>
              <button className="task-btn" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
