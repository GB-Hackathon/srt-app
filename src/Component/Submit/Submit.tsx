import { Link } from "react-router-dom";
import "./Submit.css";
// import axios from "axios";

const Submit: React.FC = () => {
  return (
    <div className="submit_inner">
      <div className="submit_up">
        <img src="report_success.png" alt="" className="submit_img" />
      </div>
      <div className="edit_btn-container">
        {/* 페이지 이동 */}
        <Link to={"/"}>
          <input
            className="edit_btn-editsubmit"
            type="button"
            value={"완료하기"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Submit;
