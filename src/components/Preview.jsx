import { Close } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetCameraImage,
  selectCameraImage,
} from "../features/camera/cameraSlice";
import "../styles/preview.css";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
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

  return (
    <section className="preview">
      <Close className="preview_close" onClick={previewClose} />
      <img src={cameraImage} alt="Camera Image" />
    </section>
  );
}

export default Preview;
