import React, { useState, useEffect } from "react";
import database from "./firebase";
import LockIcon from "@material-ui/icons/Lock";
import firebase from "firebase";
import { useParams } from "react-router-dom";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarIcon from "@material-ui/icons/Star";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./ConversationScreen.css";
import Message from "./Message";
import { useStateValue } from "./StateProvider";

const ConversationScreen = () => {
  const [{ user }] = useStateValue();
  const { channelId } = useParams();
  const [channel, setChannel] = useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (channelId) {
      const unsubscribeChannel = database
        .collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannel(snapshot.data()));

      const unsubscribeMessages = database
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
              };
            })
          );
        });

      return () => {
        //this is a cleanup function
        unsubscribeMessages();
        unsubscribeChannel();
      };
    }
  }, [channelId]);

  const placeholder =
    "Message" +
    (channelId ? (!channel.isPrivate ? " #" : " ") : "") +
    (channelId ? channel.name : "");

  const handleSend = (e) => {
    e.preventDefault();
    if (input) {
      database
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
          from: user.uid,
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
    setInput("");
  };

  return (
    <div className="conversation">
      <div className="conversation__header">
        <div className="conversation__name">
          {channel.isPrivate ? <LockIcon fontSize="small" /> : <h4>#</h4>}
          <h4>{channel.name}</h4>
        </div>
        <div className="conversation__details">
          <InfoOutlinedIcon fontSize="small" />
          <h5>Details</h5>
        </div>
      </div>

      <div className="conversation__messages">
        {messages.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            from={message.from}
            key={message.id}
            className="conversation__message"
          />
        ))}
      </div>
      <div className="message__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="message__inputField"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="message__inputButton"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConversationScreen;
