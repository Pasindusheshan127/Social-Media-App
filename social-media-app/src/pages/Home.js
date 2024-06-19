import Post from "../components/Post/Post";
import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Post />
      <Rightbar />
    </div>
  );
};

export default Home;
