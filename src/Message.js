import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import database from "./firebase";
import "./Message.css";

const Message = ({ message, timestamp, from }) => {
  const [user, setUser] = useState({});
  var formattedTimestamp = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp?.toDate());

  useEffect(() => {
    const unsubscribe = database
      .collection("users")
      .doc(from)
      .onSnapshot((snapshot) => setUser(snapshot.data()));

    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="messageContainer">
      <div className="messageContainer__avatar">
        <Avatar alt={user?.name} src={user?.profilePic} variant="rounded" />
      </div>
      <div className="messageContainer__message">
        <div className="message__from">
          <h4>{user?.name}</h4>
          <p>{formattedTimestamp.toString()}</p>
        </div>
        <div className="message__message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
