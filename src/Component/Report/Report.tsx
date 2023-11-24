import { useCallback, useRef } from "react";
import "./Report.css"
import Webcam from "react-webcam"
import axios from "axios";

const Report: React.FC = () => {
  const webcam: any = useRef()
  let constraints = {
    facingMode: { exact: "user" },
  }

  const getCapture = useCallback(
    () => {
      const img = webcam.current.getScreenshot()
      console.log(img)

      axios.post('/eme', { image: img.split(',')[1] }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resp => {
        console.log(resp)
      })
    },
    [webcam]
  )

  return (
    <div className="report_inner">
      <div className="report_cam-container">
        <div className="report_cambox">
          <Webcam
            videoConstraints={constraints}
            mirrored={true}
            disablePictureInPicture={true}
            className="webcam"
            ref={webcam}
          />
        </div>
        <div className="report_btnbox">
          <div className="report_album" />
          <button className="report_submit" onClick={getCapture}></button>
          <div className="report_switch-camera" />
        </div>
      </div>
    </div>
  );
};

export default Report