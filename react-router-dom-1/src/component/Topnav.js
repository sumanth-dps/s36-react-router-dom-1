import React from "react";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/leaves">Leaves</Link>
      <Link to="/">signout</Link>
    </nav>
  );
}

export default Topnav;
