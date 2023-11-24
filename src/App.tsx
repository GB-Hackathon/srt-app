// import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app_inner">
      <div className="app_main">
        <img className="app_img" src="src\assets\srt-logo.svg" alt="" />
        <div className="app_title">
          Safety ReporT <strong>SRT</strong>
        </div>
      </div>
      <div className="app_button">
        <input className="app_reportbtn" type="button" value={"긴급신고"} />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <input className="app_loginbtn" type="button" value={"제보하기"} />
        </Link>
      </div>
    </div>
  );
}

export default App;
