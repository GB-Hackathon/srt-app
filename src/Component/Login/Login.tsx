import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login_inner">
      <div style={{ width: "100%" }}>
        <div className="login_back">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="back.png" alt="" />
          </Link>
          <div className="login_back-title">로그인</div>
        </div>

        <div className="login_form">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="example123@email.com"
          ></input>
          <label htmlFor="pw">비밀번호</label>
          <input
            id="pw"
            type="password"
            placeholder="비밀번호 6자리 이상"
          ></input>
          <div className="login_signup">
            <div style={{ marginRight: "6px" }}>아직 계정이 없으신가요?</div>
            <Link
              to="/signup"
              style={{ color: "#3C88FF", textDecoration: "none" }}
            >
              회원가입하기
            </Link>
          </div>
        </div>
      </div>
      <div className="login_btn-container">
        <Link to={"/report"}>
          <input
            className="login_btn-loginsubmit"
            type="button"
            value={"로그인하기"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Login;
