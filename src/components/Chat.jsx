import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TimeAgo from "react-timeago";
import { selectImage } from "../features/user/userSlice";
import { db } from "../firebase";
import "../styles/Chat.css";

function Chat({ profilePic, userName, imageUrl, timestamp, read, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openChat = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      navigate("/chats/view");
    }
  };

  return (
    <section onClick={openChat} className="chat">
      <Avatar className="chat_avatar" src={profilePic} />
      <div className="chat_info">
        <h4>{userName}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat_readIcon" />}
    </section>
  );
}

export default Chat;
