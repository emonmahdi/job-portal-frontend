/* eslint-disable @typescript-eslint/no-explicit-any */

const buttonStyle = {
  border: "2px solid #00A7AC",
  borderRadius: "5px",
  padding: "8px 15px",
  margin: "0 10px",
  background: "#00A7AC",
  color: "#fff",
};

const Button = ({ children }: any) => {
  return (
    <button className="" style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
