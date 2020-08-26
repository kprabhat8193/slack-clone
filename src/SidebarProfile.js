import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import "./SidebarProfile.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const SidebarProfile = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar-profile">
      <div className="sidebar-profile__workspace">
        <Link to="/" className="sidebar-workspace__name">
          <h4>SlackClone Workspace</h4>
        </Link>

        <div className="sidebar-profile__user">
          <FiberManualRecordIcon
            fontSize="small"
            className="sidebar-profile__status"
          />
          <Link to="/profile" className="sidebar-user__name">
            <h5>{user.displayName}</h5>
          </Link>
        </div>
      </div>
      <div className="sidebar-profile__newMessage">
        <Link to="/direct-message">
          <CreateIcon
            fontSize="small"
            className="sidebar-profile__messageIcon"
          />
        </Link>
      </div>
    </div>
  );
};

export default SidebarProfile;
