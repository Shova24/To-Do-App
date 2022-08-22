import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    {
      id: 1,
      task: "Adding Item to the Task List.",
    },
  ]);
  const [deletedTask, setDeletedTask] = useState([]);
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };
  const deleteTask = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      setTask(task.filter((el) => el.id !== id));

      const deletedItem = task.find((el) => el.id === id);
      setDeletedTask([...deletedTask, deletedItem]);
    }
  };
  const deleteParmanent = (id) => {
    if (window.confirm("are you sure you want to delete Permanently?")) {
      console.log(
        id,
        deletedTask.filter((item) => console.log(item))
      );
      console.log(deletedTask);
      setDeletedTask(deletedTask.filter((item) => item.id !== id));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        deletedTask,
        deleteTask,
        addTask,
        deleteParmanent,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
