import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <div className="sidebarFriendItem">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <div className="sidebarFriendName">
          <span className="sidebarFriendNameText">{user.username}</span>
        </div>
      </div>
    </li>
  );
};

export default CloseFriend;
