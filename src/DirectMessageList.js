import React, { useState, useEffect } from "react";
import "./DirectMessageList.css";
import "./SidebarOptions.css";
import "./ChannelList.css";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import database from "./firebase";

const DirectMessageList = () => {
  //   const online = false;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    database
      .collection("users")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });
  });

  return (
    <div className="sidebarOptions__container">
      <div className="channelList__header">
        <ExpandMoreIcon fontSize="small" />
        <h5>Direct Messages</h5>
      </div>
      <div className="directMessage">
        {users.map((user) => {
          return (
            <SidebarOption
              Icon={
                user.online
                  ? FiberManualRecordIcon
                  : FiberManualRecordOutlinedIcon
              }
              name={user.name}
              to={`/conversation/${user.id}`}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DirectMessageList;
