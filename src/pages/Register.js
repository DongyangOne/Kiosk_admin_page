import { Link, useNavigate } from "react-router-dom";
import InputA from "../components/Input/InputA";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwc, setPwc] = useState("");
  const [comp, setComp] = useState("");

  const Register = () => {
    if (pw === pwc) {
      axios
        .post("http://116.39.208.72:8022/users/join", {
          username: id,
          password: pw,
          company: comp,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/");
          }
        })
        .catch((err) => {
          if (err.status === 409) {
            console.log("이미 존재하는 아이디입니다.");
          }
        });
    } else {
      console.log("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };

  return (
    <div className="container">
      <div className="Wrap">
        <div className="LOGO">LOGO</div>
        <div>
          <InputA
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
            type="text"
            place="아이디를 입력해주세요."
          />
        </div>
        <div>
          <InputA
            onChange={(e) => {
              setPw(e.target.value);
            }}
            value={pw}
            type="password"
            place="비밀번호를 입력해주세요."
          />
        </div>
        <div>
          <InputA
            onChange={(e) => {
              setPwc(e.target.value);
            }}
            value={pwc}
            type="password"
            place="비밀번호를 확인해주세요."
          />
        </div>
        <div>
          <InputA
            onChange={(e) => {
              setComp(e.target.value);
            }}
            value={comp}
            type="text"
            place="업체명을 입력해주세요."
          />
        </div>
        <button onClick={Register} className="LoginBtn">
          회원가입
        </button>
        <div className="MoveRegister">
          <Link style={{ textDecoration: "none", color: "#a6a6a6" }} to="/">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
