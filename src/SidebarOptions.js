import React from "react";
import SidebarOption from "./SidebarOption";
import GroupIcon from "@material-ui/icons/Group";
import AppsIcon from "@material-ui/icons/Apps";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FindInPageIcon from "@material-ui/icons/FindInPage";

import "./SidebarOptions.css";

const SidebarOptions = () => {
  return (
    <div className="sidebarOptions__container">
      <SidebarOption Icon={QuestionAnswerIcon} name="Threads" />
      <SidebarOption Icon={AlternateEmailIcon} name="Mentions & reactions" />
      <SidebarOption Icon={FileCopyIcon} name="Drafts" />
      <SidebarOption Icon={BookmarkBorderIcon} name="Saved Items" />
      <SidebarOption Icon={FindInPageIcon} name="Channel browser" />
      <SidebarOption Icon={GroupIcon} name="People & user groups" />
      <SidebarOption Icon={AppsIcon} name="Apps" />
      <SidebarOption Icon={LibraryBooksIcon} name="File Browser" />
    </div>
  );
};

export default SidebarOptions;
