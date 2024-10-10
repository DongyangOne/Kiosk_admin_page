import "../styles/InputA.css";

const InputA = ({ type, place, onChange, value }) => {
  return (
    <div>
      <input
        className="InputA"
        type={type}
        placeholder={place}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputA;
