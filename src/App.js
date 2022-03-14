import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Chats from "./components/Chats";
import ChatView from "./components/ChatView.jsx";
import Login from "./components/Login";
import Preview from "./components/Preview";
import WebcamCapture from "./components/WebcamCapture";
import { login, selectUser,logout } from "./features/user/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          userName: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);
  
  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
          <main className="app_body">
            <Routes>
              <Route path="/" element={<WebcamCapture />} />
              <Route path="preview" element={<Preview />} />
              <Route path="chats" element={<Chats />} />
              <Route path="chats/view" element={<ChatView />} />
            </Routes>
          </main>
        )
      }
    </div>
  );
}

export default App;
