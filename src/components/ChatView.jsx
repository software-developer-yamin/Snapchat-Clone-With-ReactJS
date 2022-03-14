import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedImage } from "../features/user/userSlice";
import "../styles/ChatView.css";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      navigate("/chats", { replace: true });
    }
  }, [selectedImage, navigate]);

  const exit = () => {
    navigate("/chats", { replace: true });
  };

  return (
    <section className="chatView" onClick={exit}>
      <img src={selectedImage} alt="" />
      <header className="chatView_timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </header>
    </section>
  );
}

export default ChatView;
