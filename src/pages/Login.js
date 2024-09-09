import InputA from "../components/InputA";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="Wrap">
        <div className="LOGO">LOGO</div>
        <div>
          <InputA type="text" place="아이디를 입력해주세요." />
        </div>
        <div>
          <InputA type="password" place="비밀번호를 입력해주세요." />
        </div>
        <button className="LoginBtn">로그인</button>
        <div className="MoveRegister">회원가입</div>
      </div>
    </div>
  );
};

export default Login;
