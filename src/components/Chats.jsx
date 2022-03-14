import { ChatBubble, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../styles/Chats.css";

function Chats() {
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
      <main className="chats_posts" >
        
      </main>
    </section>
  );
}

export default Chats;
