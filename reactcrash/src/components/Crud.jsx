import React from "react";
import { useState } from "react";

const Crud = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const AddTask = () => {
    if (newTask.trim() != "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]); // Spread Operator
      setNewTask("");
    }
  };

  const DeleteTask = (taskID) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(updatedTasks);
    if (editingTask == taskID) {
      setEditingTask(null);
      setEditedTaskText("");
    }
  };

  const EditTask = (taskID, taskText) => {
    setEditingTask(taskID);
    setEditedTaskText(taskText);
  };

  const SaveEditTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask ? { ...task, text: editedTaskText } : task
    );

    setTasks(updatedTasks);
    setEditingTask(null);
    setEditedTaskText("");
  };

  return (
    <div>
      <h1>CRUD</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={AddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTask === task.id ? (
              <div>
                <input
                  type="text"
                  placeholder="edit your text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button onClick={SaveEditTask}>Save</button>
              </div>
            ) : (
              <div>
                {task.text}
                <button onClick={() => EditTask(task.id, task.text)}>
                  Edit
                </button>
                <button onClick={() => DeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
