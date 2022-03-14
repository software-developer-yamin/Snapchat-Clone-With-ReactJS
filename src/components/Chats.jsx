import { ChatBubble, RadioButtonChecked, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCameraImage } from "../features/camera/cameraSlice";
import { selectUser } from "../features/user/userSlice";
import { auth, db } from "../firebase";
import "../styles/Chats.css";
import Chat from "./Chat";

function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapchat) =>
        setPosts(
          snapchat.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [posts, setPosts]);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    navigate("/");
  };

  return (
    <section className="chats">
      <header className="chats_header">
        <Avatar
          src={user.profilePic}
          onClick={() => auth.signOut()}
          className="chats_avatar"
        />
        <div className="chats_search">
          <Search className="chats_searchIcon" />
          <input placeholder="Friends" type="text" />
        </div>
        <ChatBubble className="chats_chatIcon" />
      </header>
      <main className="chats_posts">
        {posts.map(
          ({
            id,
            data: { profilePic, userName, imageUrl, timestamp, read },
          }) => (
            <Chat
              key={id}
              id={id}
              profilePic={profilePic}
              userName={userName}
              imageUrl={imageUrl}
              timestamp={timestamp}
              read={read}
            />
          )
        )}
      </main>
      <RadioButtonChecked
        className="chats_takePicIcon"
        onClick={takeSnap}
        fontSize="large"
      />
    </section>
  );
}

export default Chats;
