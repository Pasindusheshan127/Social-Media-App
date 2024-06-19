import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuizIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <GolfCourseIcon className="sidebarIcon" />
            <span className="sidebarListitemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
          <li className="sidebarFriend">
            <div className="sidebarFriendItem">
              <img
                className="sidebarFriendImg"
                src="assets/person/1.jpeg"
                alt=""
              />
              <div className="sidebarFriendName">
                <span className="sidebarFriendNameText">Isuru</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
