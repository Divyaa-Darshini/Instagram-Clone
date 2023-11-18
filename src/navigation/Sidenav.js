import React from "react";
import "./Sidenav.css";
import { GoHomeFill } from "react-icons/go";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuIcon from "@mui/icons-material/Menu";



function Sidenav() {
    return (
      <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
        />
  
        <div className="sidenav__buttons">
          <button className="sidenav__button">
          <GoHomeFill size={22}/>
            <span>Home</span>
          </button>
          <button className="sidenav__button">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="sidenav__button">
            <ExploreOutlinedIcon />
            <span>Explore</span>
          </button>
          <button className="sidenav__button">
            <SlideshowIcon />
            <span>Reels</span>
          </button>
          <button className="sidenav__button">
            <ChatIcon />
            <span>Messages</span>
          </button>
          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
          <button className="sidenav__button">
            <AddBoxOutlinedIcon />
            <span>Create</span>
          </button>
        </div>
        <div className="sidenav__more">
          <button className="sidenav__button">
            <MenuIcon />
            <span className="sidenav__buttonText">More</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Sidenav;
