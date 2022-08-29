import { createContext, useState } from "react";
import Notification from "../Shared/Notification";
import TaskData from "../../Data/TaskData";
import PopUp from "../Shared/PopUP";

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  //---------------------------------------States---------------------------------------
  //Task Section States
  const [task, setTask] = useState(TaskData);
  const [deletedTask, setDeletedTask] = useState([]);

  //Profile Section States
  const [title, setTitle] = useState("Default Title");
  const [description, setDescription] = useState("Default Description");
  const [imageProfile, setImageProfile] = useState("https://joeschmoe.io/api/v1/random");
  const [edit, setEdit] = useState(false);

  //Modal States
  const [visible, setVisible] = useState(false);

  //Edit task States
  const [editTask, setEditTask] = useState({
    item: {},
    edit: false,
  });

  //--------------------------------------------Functions----------------------------------
  //Task Functions
  const addTask = (newTask) => {
    setTask([...task, newTask]);
    // console.log(newTask);
  };
  const editTaskItem = (item) => {
    setVisible(true);
    // console.log(item);
    setEditTask({ item, edit: true });
  };

  const updateTaskItem = (id, updatedItem) => {};

  const deleteTask = (id) => {
    // if (window.confirm("are you sure you want to delete?")) {
      setTask(task.filter((el) => el.id !== id));
      const deletedItem = task.find((el) => el.id === id);
      setDeletedTask([...deletedTask, deletedItem]);
      Notification("Task Deleted");
    // }
  };
  const deleteParmanent = (id) => {
    if (window.confirm("are you sure you want to delete Permanently?")) {
      // console.log(
      //   id,
      //   deletedTask.filter((item) => console.log(item))
      // );
      setDeletedTask(deletedTask.filter((item) => item.id !== id));
      Notification("Task Permanently Deleted");
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
        visible,

        setVisible,
        editTaskItem,
        setEdit,
        deleteTask,
        addTask,
        deleteParmanent,
        profileEdit,
        updateProfile,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
