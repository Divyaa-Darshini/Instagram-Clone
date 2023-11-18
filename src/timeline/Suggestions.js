import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="username__top">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="user_name">divyaa.darshini</span>
            </div>
            <button className="switch__button">Switch</button>
          </div>
          
      <div className="suggestions__title">Suggested for you</div>
      <div className="suggestions__seeall">See All</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username__info">
              <span className="username">John_cleave</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Asim_Ijaz</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Matthew</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>L</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Liam</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
