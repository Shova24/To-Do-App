import { createContext, useState } from "react";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  //Task Section States
  const [task, setTask] = useState([
    {
      id: 1,
      task: "Adding Item to the Task List.",
    },
  ]);
  const [deletedTask, setDeletedTask] = useState([]);
  const [editTask, setEditTask] = useState(false);

  //Profile Section States
  const [title, setTitle] = useState("Default Title");
  const [description, setDescription] = useState("Default Description");
  const [imageProfile, setImageProfile] = useState("https://joeschmoe.io/api/v1/random");
  const [edit, setEdit] = useState(false);

  //Notification Section states
  const [notificationTitle, setNotificationTitle] = useState("Default Notification Title");

  //notification Functions
  const sendNotification = (title) => {
    console.log("notification is sent");
    setNotificationTitle(title);
  };

  //Task Functions
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };
  const editTaskItem = () => {
    setEditTask(true);
    console.log("Edit Task Item");
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

  //Profile Section
  const profileEdit = () => {
    setEdit(true);
  };
  const updateProfile = (title, description, image) => {
    setTitle(title);
    setDescription(description);
    setImageProfile(image);
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
        notificationTitle,
        editTaskItem,
        setEdit,
        deleteTask,
        addTask,
        deleteParmanent,
        profileEdit,
        updateProfile,
        sendNotification,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
