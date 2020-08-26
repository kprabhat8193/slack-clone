import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import "./ChannelList.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LockIcon from "@material-ui/icons/Lock";
import database from "./firebase";
import CreateChannelButton from "./CreateChannelButton";

const ChannelList = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const unsubscribe = database
      .collection("channels")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        setChannels(
          snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });

    return () => {
      unsubscribe();
    };
  }, []); //, [channels]

  return (
    <div className="sidebar__channelList">
      <div className="channelList__header">
        <ExpandMoreIcon fontSize="small" />
        <h5>Channels</h5>
        <CreateChannelButton />
      </div>
      {channels.map((channel) => (
        <SidebarOption
          name={channel.name}
          to={`/channel/${channel.id}`}
          key={channel.id}
          Icon={channel.isPrivate ? LockIcon : null}
        />
      ))}
    </div>
  );
};

export default ChannelList;
