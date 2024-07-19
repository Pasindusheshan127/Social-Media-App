import { MoreHorizOutlined } from "@mui/icons-material";
import "./Post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUsers();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`http://localhost:8800/api/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">
              <TimeAgo date={post.createdAt} />
            </span>
          </div>
          <div className="postTopRight">
            <MoreHorizOutlined />
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img className="postImg" src={PF + post.img} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src={`${PF}like.png`}
            alt=""
            onClick={likeHandler}
          />
          <img
            className="likeIcon"
            src={`${PF}heart.png`}
            alt=""
            onClick={likeHandler}
          />
        </div>
        <span className="postLikeCounter">{like} likes</span>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
