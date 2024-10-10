import { Link, useNavigate } from "react-router-dom";
import InputA from "../components/Input/InputA";
import "../styles/Login.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const Login = () => {
    axios
      .post("http://116.39.208.72:8022/users/login", {
        username: id,
        password: pw,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/main");
          localStorage.setItem("token", res.data.data.token);
        }
      })
      .catch((err) => {
        if (err.code === 401) {
          console.log("ID또는 비밀번호가 일치하지 않습니다.");
        }
        if (err.code === 500) {
          console.log("서버오류가 발생했습니다.");
        }
      });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  return (
    <div className="container">
      <div className="Wrap">
        <div className="LOGO">LOGO</div>
        <div>
          <InputA
            onChange={onChangeId}
            value={id}
            type="text"
            place="아이디를 입력해주세요."
          />
        </div>
        <div>
          <InputA
            onChange={onChangePw}
            value={pw}
            type="password"
            place="비밀번호를 입력해주세요."
          />
        </div>
        <button onClick={Login} className="LoginBtn">
          로그인
        </button>
        <div className="MoveRegister">
          <Link
            style={{ textDecoration: "none", color: "#a6a6a6" }}
            to="/register"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
