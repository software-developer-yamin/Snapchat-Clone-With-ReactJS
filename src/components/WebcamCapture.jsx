import { RadioButtonUnchecked } from "@mui/icons-material";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setCameraImage } from "../features/camera/cameraSlice";

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  const videoConstrainer = {
    width: 250,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
       const imageSrc = webcamRef.current.getScreenshot();
       dispatch(setCameraImage(imageSrc));
  }, [webcamRef]);

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
      <RadioButtonUnchecked
        className="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />
    </section>
  );
}

export default WebcamCapture;
