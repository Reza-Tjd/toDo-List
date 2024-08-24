import React from "react";
import "./NewTask.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NewTask({addTask}) {
  const [NewTask, setNewTask] = useState("");
  const [NewDate, setNewDate] = useState("");
  const [NewPriority, setNewPriority] = useState("");
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleDateChange = (event) => {
    setNewDate(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setNewPriority(event.target.value);
  };

  const handleSaveTask = () => {
    const newInfo = {
      task: NewTask,
      date: NewDate,
      priority: NewPriority,
    };
    addTask(newInfo)
  };

  return (
    
    // the-whole-page
    <div className="background-color1 w-screen h-screen flex justify-center items-center ">
      {/* task-card */}
      <div className="card-background w-[650px] h-[430px] rounded-lg py-7 px-7">
        {/* btn */}
        <Link to="/tasks">
          <button className="w-24 h-10 shadow-xl rounded-xl border-[1.5px] font-semibold border-gray-200 text-gray-500 hover:bg-slate-50 delay-150  duration-300">
            <ArrowBackIcon fontSize="small" /> Back
          </button>
        </Link>
        {/* title */}
        <div className="flex justify-center">
          <p className="text-xl font-bold mb-4 ">Create New Task </p>
        </div>
        {/* inserting-new task */}
        <h4 className="mb-1">Task Name</h4>
        <input
          type="text"
          placeholder="Enter task name"
          className="border-[1px] border-gray-200 rounded-sm h-10 w-full pl-3 mb-4 outline-none"
          onChange={handleInputChange}
        />

        {/* selecting-the-date */}
        <h4 className="mb-1">Due Date</h4>
        <input
          type="date"
          placeholder="Select due date"
          className="border-[1px] border-gray-200 rounded-sm h-10 w-full pl-3 mb-4 outline-none"
          onChange={handleDateChange}
        />
        {/* the-priority */}
        <h4 className="mb-1">Priority</h4>

        <select
          name="priority"
          id="option"
          className="border-[1px] border-gray-200 rounded-sm h-10 w-full pl-3 mb-4 outline-none"
          onChange={handlePriorityChange}
        >
          <option value="">----</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        

        {/* save-task-button */}
        <div className="flex justify-end">
          <Link to="/tasks">
          <button
            onClick={handleSaveTask}
            className="w-24 h-10 shadow-xl rounded-xl border-[1.5px] font-semibold border-gray-200  hover:bg-gray-500 delay-150 bg-black text-white hover:text-white  duration-300 text-sm"
          >
            Save Task
          </button>

          </Link>
        </div>
      </div>
      
      

    </div>
  );
}
