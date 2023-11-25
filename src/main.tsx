import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./Component/Login/Login.tsx";
import Signup from "./Component/SignUp/SignUp.tsx";
import Report from "./Component/Report/Report.tsx";
import Edit from "./Component/Edit/Edit.tsx";
import Submit from "./Component/Submit/Submit.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="report" element={<Report />} />
      <Route path="edit" element={<Edit />} />
      <Route path="submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>
);
