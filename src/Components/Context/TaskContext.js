import { createContext, useState } from "react";
import Notification from "../Shared/Notification";
import TaskData from "../../Data/TaskData";
import TaskForm from "../Shared/TaskForm";

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  //---------------------------------------States---------------------------------------
  //Task Section States
  const [task, setTask] = useState(TaskData);
  const [deletedTask, setDeletedTask] = useState([]);
  const [filteredList, setFilteredList] = useState(task);

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
    setFilteredList([...filteredList, newTask]);
    // console.log(newTask);
  };

  const updateTaskItem = (id, updatedItem) => {
    const up = task.filter((item) => item.id !== id);
    setTask([...up, updatedItem]);
    setFilteredList([...up, updatedItem]);
  };

  const deleteTask = (id) => {
    const sItem = task.find((el) => el.id === id);
    setDeletedTask([...deletedTask, sItem]);
    const balchal = task.filter((el) => el.id !== id);
    setTask([...balchal]);
    setFilteredList([...balchal]);
    Notification("Task Deleted");
  };

  const deleteParmanent = (id) => {
    setDeletedTask(deletedTask.filter((item) => item.id !== id));
    Notification("Task Permanently Deleted");
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
        editTask,
        imageProfile,
        visible,
        edit,
        filteredList,

        setVisible,
        setEdit,
        deleteTask,
        addTask,
        deleteParmanent,
        profileEdit,
        updateProfile,
        updateTaskItem,
        setTask,
        setDeletedTask,
        setFilteredList,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
