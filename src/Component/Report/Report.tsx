import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Report.css";
import Webcam from "react-webcam";
import axios from "axios";

const Report: React.FC = () => {
  const navigate = useNavigate();
  const webcam: any = useRef();
  let constraints = {
    facingMode: { exact: "background" },
  };

  const getCapture = useCallback(() => {
    const img = webcam.current.getScreenshot();
    sessionStorage.setItem("img", img);

    axios
      .post(
        "/eme",
        { image: img.split(",")[1] },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
      });
  }, [webcam]);

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
          <Link to="/edit">
            <button className="report_submit" onClick={getCapture}></button>
          </Link>
          <div className="report_switch-camera" />
        </div>
      </div>
      <div className="nav report_nav">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <svg
            className="nav_icon"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate("/")}
          >
            <path
              d="M24.9937 11.6467C24.9937 12.3968 24.3687 12.9844 23.6603 12.9844H22.3268L22.356 19.6599C22.356 19.7724 22.3476 19.8849 22.3351 19.9974V20.6683C22.3351 21.5893 21.5893 22.3351 20.6683 22.3351H20.0016C19.9558 22.3351 19.9099 22.3351 19.8641 22.331C19.8058 22.3351 19.7474 22.3351 19.6891 22.3351H18.3348H17.3347C16.4138 22.3351 15.6679 21.5893 15.6679 20.6683V19.6683V17.0014C15.6679 16.2638 15.072 15.6679 14.3345 15.6679H11.6676C10.93 15.6679 10.3341 16.2638 10.3341 17.0014V19.6683V20.6683C10.3341 21.5893 9.58823 22.3351 8.66732 22.3351H7.66723H6.33795C6.27545 22.3351 6.21294 22.331 6.15044 22.3268C6.10043 22.331 6.05043 22.3351 6.00043 22.3351H5.3337C4.41279 22.3351 3.66689 21.5893 3.66689 20.6683V16.0013C3.66689 15.9638 3.66689 15.9221 3.67106 15.8846V12.9844H2.33345C1.58338 12.9844 1 12.401 1 11.6467C1 11.2717 1.12501 10.9383 1.4167 10.6467L12.1009 1.33336C12.3926 1.04167 12.726 1 13.0177 1C13.3094 1 13.6427 1.08334 13.8928 1.29169L24.5353 10.6467C24.8687 10.9383 25.0354 11.2717 24.9937 11.6467Z"
              stroke="#AAAAAA"
              strokeWidth="2"
            />
          </svg>
          <div style={{ marginTop: "5px" }}>홈</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <svg
            className="nav_icon"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate("/report")}
          >
            <path
              d="M3.70953 13.38L3.70953 8.7661V8.7661C3.70953 4.477 7.21084 1 11.4999 1V1C15.789 1 19.2903 4.477 19.2903 8.7661V8.7661V13.38"
              stroke="#FF5757"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              d="M19.4514 22.1199H3.54882C2.14114 22.1199 1 20.9787 1 19.571C1 18.1634 2.14115 17.0222 3.54882 17.0222H19.4514C20.8591 17.0222 22.0002 18.1634 22.0002 19.571C22.0002 20.9787 20.8591 22.1199 19.4514 22.1199Z"
              stroke="#FF5757"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11.1615 5.36972C8.79036 5.36972 7.09668 6.82619 7.09668 9.73912"
              stroke="#FF5757"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ marginTop: "5px" }}>신고하기</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <svg
            className="nav_icon"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate("/list")}
          >
            <path
              d="M2.66667 2.00151C2.3 2.00151 2 2.30173 2 2.66868V16.0121C2 16.379 2.3 16.6792 2.66667 16.6792H21.3333C21.7 16.6792 22 16.379 22 16.0121V2.66868C22 2.30173 21.7 2.00151 21.3333 2.00151H2.66667ZM0 2.66868C0 1.19673 1.19583 0 2.66667 0H21.3333C22.8042 0 24 1.19673 24 2.66868V16.0121C24 17.484 22.8042 18.6807 21.3333 18.6807H2.66667C1.19583 18.6807 0 17.484 0 16.0121V2.66868ZM4 5.33735C4 4.98347 4.14048 4.64407 4.39052 4.39383C4.64057 4.1436 4.97971 4.00302 5.33333 4.00302C5.68696 4.00302 6.02609 4.1436 6.27614 4.39383C6.52619 4.64407 6.66667 4.98347 6.66667 5.33735C6.66667 5.69124 6.52619 6.03064 6.27614 6.28087C6.02609 6.53111 5.68696 6.67169 5.33333 6.67169C4.97971 6.67169 4.64057 6.53111 4.39052 6.28087C4.14048 6.03064 4 5.69124 4 5.33735ZM8.33333 5.33735C8.33333 4.78277 8.77917 4.3366 9.33333 4.3366H18.6667C19.2208 4.3366 19.6667 4.78277 19.6667 5.33735C19.6667 5.89194 19.2208 6.33811 18.6667 6.33811H9.33333C8.77917 6.33811 8.33333 5.89194 8.33333 5.33735ZM8.33333 9.34037C8.33333 8.78578 8.77917 8.33961 9.33333 8.33961H18.6667C19.2208 8.33961 19.6667 8.78578 19.6667 9.34037C19.6667 9.89495 19.2208 10.3411 18.6667 10.3411H9.33333C8.77917 10.3411 8.33333 9.89495 8.33333 9.34037ZM8.33333 13.3434C8.33333 12.7888 8.77917 12.3426 9.33333 12.3426H18.6667C19.2208 12.3426 19.6667 12.7888 19.6667 13.3434C19.6667 13.898 19.2208 14.3441 18.6667 14.3441H9.33333C8.77917 14.3441 8.33333 13.898 8.33333 13.3434ZM5.33333 10.6747C4.97971 10.6747 4.64057 10.5341 4.39052 10.2839C4.14048 10.0337 4 9.69426 4 9.34037C4 8.98648 4.14048 8.64709 4.39052 8.39685C4.64057 8.14661 4.97971 8.00603 5.33333 8.00603C5.68696 8.00603 6.02609 8.14661 6.27614 8.39685C6.52619 8.64709 6.66667 8.98648 6.66667 9.34037C6.66667 9.69426 6.52619 10.0337 6.27614 10.2839C6.02609 10.5341 5.68696 10.6747 5.33333 10.6747ZM4 13.3434C4 12.9895 4.14048 12.6501 4.39052 12.3999C4.64057 12.1496 4.97971 12.009 5.33333 12.009C5.68696 12.009 6.02609 12.1496 6.27614 12.3999C6.52619 12.6501 6.66667 12.9895 6.66667 13.3434C6.66667 13.6973 6.52619 14.0367 6.27614 14.2869C6.02609 14.5371 5.68696 14.6777 5.33333 14.6777C4.97971 14.6777 4.64057 14.5371 4.39052 14.2869C4.14048 14.0367 4 13.6973 4 13.3434Z"
              fill="#AAAAAA"
            />
          </svg>
          <div style={{ marginTop: "5px" }}>신고내역</div>
        </div>
      </div>
    </div>
  );
};

export default Report;
