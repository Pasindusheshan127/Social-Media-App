import { MoreHorizOutlined } from "@mui/icons-material";
import "./Post.css";
import { Users } from "../../data/DummyData";
import { useState } from "react";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHorizOutlined />
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img className="postImg" src="assets/post/1.jpg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src="assets/icons/like.png"
            alt=""
            onClick={likeHandler}
          />
          <img
            className="likeIcon"
            src="assets/icons/heart.png"
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
