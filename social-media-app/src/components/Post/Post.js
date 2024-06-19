import { MoreHorizOutlined } from "@mui/icons-material";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt="" />
            <span className="postUsername">username</span>
            <span className="postDate">1 hour ago</span>
          </div>
          <div className="postTopRight">
            <MoreHorizOutlined />
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">hey ! its my first post.</span>
        <img className="postImg" src="assets/post/1.jpg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src="assets/icons/like.png" alt="" />
          <img className="likeIcon" src="assets/icons/like.png" alt="" />
          <img className="likeIcon" src="assets/icons/like.png" alt="" />
        </div>
        <span className="postLikeCounter">1.5k likes</span>
        <div className="postBottomRight">
          <span className="postCommentText">12 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
