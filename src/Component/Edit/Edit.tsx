import { Link } from "react-router-dom";
import "./Edit.css";
// import axios from "axios";

const Edit: React.FC = () => {
  return (
    <div className="edit_inner">
      <div className="edit_back">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="src\assets\back.png" alt="" />
        </Link>
        <div className="edit_back-title">AI 분석하기</div>
      </div>

      <div className="edit_form">
        {/* 캡쳐 이미지 불러오기 */}
        <img
          src={sessionStorage.getItem("img")!}
          alt=""
          className="edit_capture"
          width={"100%"}
        />
        <label htmlFor="pw">제목</label>
        <div className="edit_title">차량 교통사고 긴급 신고</div>
        <label htmlFor="email">내용</label>
        <textarea
          placeholder="내용을 입력해 주세요."
          className="edit_textarea"
        ></textarea>
        <label htmlFor="pw">날짜</label>
        <div className="edit_date">2023-11-24 21:37:25</div>
      </div>
      <div className="edit_btn-container">
        {/* 페이지 이동 */}
        <Link to={"/submit"}>
          <input
            className="edit_btn-editsubmit"
            type="button"
            value={"신고 제출"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Edit;
