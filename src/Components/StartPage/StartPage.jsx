import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export default function WelcomePage() {
  return (
    // the-whole-page
    <div className="background-color3 w-screen h-screen flex justify-center items-center">
      {/* the-middle-card */}
      <div className="card-background rounded-lg w-[540px] h-40 flex items-center flex-col pt-5">
        <h2 className="font-bold text-2xl mt-1">Easy Task Manager</h2>
        <p className="text-sm text-gray-600 mt-3"> Get the life organized.</p>
        <Link to="/signup">
        <button className="w-32 h-8 bg-black text-white rounded-lg text-sm font-semibold delay-150 duration-300 mt-4">
         Let's Start{" "}
        </button>
        </Link>
      </div>
    </div>
  );
}
