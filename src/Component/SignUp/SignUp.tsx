import { Link } from "react-router-dom"
import "./SignUp.css"
import { ChangeEvent, useState } from "react"

const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    tel: ''
  })

  return (
    <div className="signup_inner">
      <div style={{ width: "100%" }}>
        <div className="signup_back">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="src\assets\back.png" alt="" />
          </Link>
          <div className="signup_back-title">로그인</div>
        </div>

        <div className="signup_form">
          <label htmlFor="pw">이름</label>
          <input id="name" type="text" placeholder="ex) 손보석" value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, name: e.target.value })}></input>
          <label htmlFor="email">이메일</label>
          <input id="email" type="email" placeholder="example123@email.com" value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: e.target.value })}></input>
          <label htmlFor="pw">비밀번호</label>
          <input
            id="pw"
            type="password"
            placeholder="비밀번호 6자리 이상"
          ></input>
          <label htmlFor="pw">전화번호</label>
          <input id="pw" type="tel" placeholder="ex) 010-1234-5678"></input>
        </div>
      </div>
      <div className="signup_btn-container">
        <Link to={"/login"}>
          <input
            className="signup_btn-signupsubmit"
            type="button"
            value={"가입하기"}
          />
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
