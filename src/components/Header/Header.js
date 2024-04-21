import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";


export default function Header() { 
  const dispatch =  useDispatch() ; 
  const [term, setTerm] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
