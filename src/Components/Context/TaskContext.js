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

  //Profile Section Edit
  const [title, setTitle] = useState("Default Title");
  const [description, setDescription] = useState("Default Description");
  const [imageProfile, setImageProfile] = useState("https://joeschmoe.io/api/v1/random");
  const [edit, setEdit] = useState(false);

  const profileEdit = () => {
    // console.log("From Profile Card");
    setEdit(true);
    // console.log(title, description);
  };
  const updateProfile = (title, description, image) => {
    setTitle(title);
    setDescription(description);
    setImageProfile(image);
  };
  const [editTask, setEditTask] = useState(false);

  const editTaskItem = () => {
    console.log("Edit Task Item");
    
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        deletedTask,
        title,
        description,
        edit,
        imageProfile,
        editTask,
        editTaskItem,
        setEdit,
        deleteTask,
        addTask,
        deleteParmanent,
        profileEdit,
        updateProfile,
        setEditTask
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
