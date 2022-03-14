import {
  AttachFile,
  Close,
  Create,
  Crop,
  MusicNote,
  Note,
  Send,
  TextFields,
  Timer,
} from "@mui/icons-material";
import { serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  resetCameraImage,
  selectCameraImage,
} from "../features/camera/cameraSlice";
import { selectUser } from "../features/user/userSlice";
import { db, storage } from "../firebase";
import "../styles/preview.css";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      navigate("/", { replace: true });
    }
  }, [cameraImage, navigate]);

  const previewClose = () => {
    dispatch(resetCameraImage());
    navigate("/", { replace: true });
  };

  const sendPost = () => {
    const id = uuidv4();
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              userName: user.userName,
              read: false,
              timestamp: serverTimestamp(),
              profilePic: user.profilePic,
            });
            navigate("/chats", { replace: true });
          });
      }
    );
  };

  return (
    <section className="preview">
      <Close className="preview_close" onClick={previewClose} />
      <main className="preview_toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </main>
      <img src={cameraImage} alt="" />
      <footer className="preview_footer" onClick={sendPost}>
        <h2>Send Now</h2>
        <Send className="preview_sendIcon" />
      </footer>
    </section>
  );
}

export default Preview;
