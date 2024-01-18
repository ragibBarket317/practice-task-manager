import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

export default function TaskBoard() {
  const taskData = [
    {
      id: crypto.randomUUID(),
      title: "I am Learning React And Next JS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFav: false,
    },
  ];

  const [tasks, setTasks] = useState(taskData);
  const [updateTask, setUpdateTask] = useState(null);
  const [isModalOn, setIsModalOn] = useState(false);

  const handleTask = (newTask, isAdd) => {
    setUpdateTask(null);
    if (isAdd && newTask.title !== "" && newTask.description !== "") {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }

    setIsModalOn(false);
  };

  const handleAddTask = () => {
    setIsModalOn(true);
  };

  const handleEditTask = (task) => {
    setUpdateTask(task);
    setIsModalOn(true);
  };

  const handleClose = () => {
    setUpdateTask(null);
    setIsModalOn(false);
  };

  const handleDeleteTask = (taskId) => {
    const afterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(afterDelete);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModalOn && (
        <TaskModal
          updateTask={updateTask}
          onTask={handleTask}
          onClose={handleClose}
        ></TaskModal>
      )}
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTask></SearchTask>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddTask={handleAddTask}
            onDeleteAll={handleDeleteAll}
          ></TaskAction>
          {tasks.map((task) => (
            <TaskList
              key={task.id}
              task={task}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            ></TaskList>
          ))}
        </div>
      </div>
    </section>
  );
}
