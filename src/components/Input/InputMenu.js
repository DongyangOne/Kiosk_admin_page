const InputMenu = ({ label, value, setValue }) => {
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <label style={{ fontSize: "15px" }}>{label}</label>
      <input
        style={{
          width: "360px",
          height: "29px",
          border: "1px solid #d9d9d9",
          borderRadius: 5,
        }}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
};

export default InputMenu;
