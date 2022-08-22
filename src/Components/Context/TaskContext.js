import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    {
      id: 1,
      task: "Adding Item to the Task List.",
    },
  ]);

  return (
    <TaskContext.Provider
      value={{
        task,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
