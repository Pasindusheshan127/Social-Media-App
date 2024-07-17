import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <div className="sidebarFriendItem">
        <img
          className="sidebarFriendImg"
          src={PF + user.profilePicture}
          alt=""
        />
        <div className="sidebarFriendName">
          <span className="sidebarFriendNameText">{user.username}</span>
        </div>
      </div>
    </li>
  );
};

export default CloseFriend;
