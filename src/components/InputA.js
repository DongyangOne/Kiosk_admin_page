import "./styles/InputA.css";

const InputA = ({ type, place }) => {
  return (
    <div>
      <input className="InputA" type={type} placeholder={place} />
    </div>
  );
};

export default InputA;
