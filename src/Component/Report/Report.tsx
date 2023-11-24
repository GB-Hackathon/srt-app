// import { Link } from "react-router-dom";
import "./Report.css";
import Webcam from "react-webcam";
//웹캠 문서 : https://www.npmjs.com/package/react-webcam

const Report: React.FC = () => {
  let constraints = {
    facingMode: { exact: "user" },
  };

  return (
    <div className="report_inner">
      <div className="report_cam-container">
        <div className="report_cambox">
          <Webcam
            videoConstraints={constraints}
            mirrored={true}
            disablePictureInPicture={true}
            className="webcam"
          />
        </div>
        <div className="report_btnbox">
          <div className="report_album" />
          <div className="report_submit" />
          <div className="report_switch-camera" />
        </div>
      </div>
    </div>
  );
};

export default Report;
