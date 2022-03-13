import { RadioButtonUnchecked } from "@mui/icons-material";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function WebcamCapture() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const videoConstrainer = {
    width: 250,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
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
      <img src={image} alt="" />
    </section>
  );
}

export default WebcamCapture;
