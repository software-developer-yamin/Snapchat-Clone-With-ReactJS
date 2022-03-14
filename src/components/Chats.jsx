import { ChatBubble, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "../styles/Chats.css";
import Chat from "./Chat";



function Chats() {
  const [posts, setPosts] = useState([]);

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

  return (
    <section className="chats">
      <header className="chats_header">
        <Avatar className="chats_avatar" />
        <div className="chats_search">
          <Search />
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
    </section>
  );
}

export default Chats;
