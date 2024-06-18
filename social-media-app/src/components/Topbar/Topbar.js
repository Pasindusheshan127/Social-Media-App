import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft"></div>
      <div className="topbarCenter"></div>
      <div className="topbarRight"></div>
    </div>
  );
}
