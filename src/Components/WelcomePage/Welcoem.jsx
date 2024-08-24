import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    // the-whole-page
    <div className="background-color5 w-screen h-screen flex justify-center items-center">
      {/* the-middle-card */}
      <div className="card-background rounded-lg w-[540px] h-48 flex items-center flex-col pt-5">
        <CardGiftcardIcon fontSize="large"/>
        <h2 className="font-bold text-2xl mt-1">Welcome, Jenny!</h2>
        <p className="text-sm text-gray-600 mt-3">Let's get started on your tasks today.</p>
        <Link to='/newtask'><button className="w-32 h-8 bg-black text-white rounded-lg text-sm font-semibold mt-4"> Add New Task</button></Link>
      </div>
    </div>
  );
}
