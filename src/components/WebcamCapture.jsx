import { RadioButtonChecked } from "@mui/icons-material";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { setCameraImage } from "../features/camera/cameraSlice";
import "../styles/WebcamCapture.css"

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videoConstrainer = {
    width: 250,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
  }, [webcamRef,dispatch,navigate]);

  return (
    <section className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstrainer.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstrainer.width}
        videoConstraints={videoConstrainer}
      />
      <RadioButtonChecked
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />
    </section>
  );
}

export default WebcamCapture;
