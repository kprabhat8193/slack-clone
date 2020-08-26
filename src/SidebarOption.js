import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

const SidebarOption = ({ Icon, name, to }) => {
  return (
    <Link className="sidebarLink" to={to ? to : "/"}>
      <div className="sidebarOption">
        {Icon ? <Icon fontSize="small" /> : <h5>#</h5>}
        <span className="sidebarOption__name">
          <h5>{name}</h5>
        </span>
      </div>
    </Link>
  );
};

export default SidebarOption;
