import React from "react";
import "./Task.css";
import SegmentedControl from "../SegmentControl/SegmentControl";

export default function Task({ todoList }) {
  return (
    <div className="background-color4 h-screen w-screen flex items-center justify-center">
      <div className="card-background w-[650px] h-96 px-4 py-5">
        <div className="flex justify-center">
          <h1 className="font-bold text-xl">Tasks</h1>
        </div>
        <div className="flex justify-end">
          <SegmentedControl />
        </div>
        <div className="list">
          {todoList.map((task, index) => {
            let priorityColor;
            if (task.priority === "High") {
              priorityColor = "bg-red-500";  
            } else if (task.priority === "Medium") {
              priorityColor = "bg-black";  
            } else if (task.priority === "Low") {
              priorityColor = "bg-blue-300";  
            } else {
              priorityColor = "bg-white";  
            }

            return (
              <div key={index} className="flex justify-between items-center background-color4 mt-2 rounded-md px-3 h-16">
                <div>
                  <h1 className="text-md font-semibold">{task.task}</h1>
                  <h2 className="text-sm text-gray-500">Due: {task.date}</h2>
                </div>
                <h3 className={`text-[10px] text-white font-semibold rounded-xl px-4 py-1 ${priorityColor}`}>
                  {task.priority}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
