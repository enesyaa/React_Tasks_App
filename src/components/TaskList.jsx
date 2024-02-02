import React from "react";
import { TaskShow } from "./TaskShow";

export const TaskList = ({ tasks, ondelete, onUpdate }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            ondelete={ondelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};
