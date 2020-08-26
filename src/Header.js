import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/profile">
          <Avatar
            alt={user?.displayName}
            src={user?.photoURL}
            variant="circle"
            className="header__avatar"
          />
        </Link>
        <Link to="/history">
          <AccessTimeIcon fontSize="small" className="header__history" />
        </Link>
      </div>

      <div className="header__search">
        <SearchIcon fontSize="small" className="header__searchIcon" />
        <input
          placeholder="Search SlackClone"
          className="search__input"
          type="text"
        />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
