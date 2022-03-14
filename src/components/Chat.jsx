import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import TimeAgo from "react-timeago";
import "../styles/Chat.css";

function Chat({ profilePic, userName, imageUrl, timestamp, read }) {
  return (
    <section className="chat">
      <Avatar className="chat_avatar" src={profilePic} />
      <div className="chat_info">
        <h4>{userName}</h4>
        <p>
          Tap to view -{" "}
          <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat_readIcon" />}
    </section>
  );
}

export default Chat;
