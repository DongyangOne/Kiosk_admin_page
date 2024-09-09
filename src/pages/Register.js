import InputA from "../components/InputA";

const Register = () => {
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
        <div>
          <InputA type="password" place="비밀번호를 확인해주세요." />
        </div>
        <div>
          <InputA type="password" place="업체명을 입력해주세요." />
        </div>
        <button className="LoginBtn">회원가입</button>
        <div className="MoveRegister">로그인</div>
      </div>
    </div>
  );
};

export default Register;
