import React from "react";
import Button from "react-bootstrap/Button";
import AddIcon from "@material-ui/icons/Add";
import database from "./firebase";
import "./CreateChannelButton.css";

const CreateChannelButton = () => {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name.");
    if (channelName) {
      database.collection("channels").add({
        name: channelName,
      });
    }
  };

  return (
    <div className="channelList__createChannel">
      <Button
        variant="light"
        onClick={addChannel}
        className="createChannel__button"
      >
        <AddIcon className="channelList__addIcon" fontSize="small" />
      </Button>
    </div>
  );
};

export default CreateChannelButton;
