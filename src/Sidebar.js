import React from "react";
import SidebarProfile from "./SidebarProfile";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";
import ChannelList from "./ChannelList";
import DirectMessageList from "./DirectMessageList";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <SidebarProfile />
      <div className="sidebarContainer__scrollable">
        <SidebarOptions />
        <ChannelList />
        <DirectMessageList />
      </div>
    </div>
  );
};

export default Sidebar;
