import Share from "../Shere/Share";
import "./Feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/668c01333791630cb278e77f"
          );
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
