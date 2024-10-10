const InputMenu = ({ label, value, setValue, placeholder }) => {
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{ fontSize: "16px", fontWeight: "medium", marginBottom: "11px" }}
      >
        {label}
      </label>
      <input
        style={{
          width: "360px",
          height: "29px",
          border: "1px solid #d9d9d9",
          borderRadius: 5,
          paddingLeft: 11,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
};

export default InputMenu;
