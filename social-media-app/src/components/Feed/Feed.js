import Share from "../Shere/Share";
import Post from "../Post/Post";
import "./Feed.css";
import { Posts } from "../../data/DummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
