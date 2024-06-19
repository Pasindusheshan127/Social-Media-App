import Post from "../../components/Post/Post";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Post />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
