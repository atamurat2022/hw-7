import React from "react";

const Button = ({ bgcolor, color, title, onClick, width }) => {
  const style = {
    backgroundColor: bgcolor,
    color: color,
    width: width,
    padding: "7px",
    borderRadius: "7px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  };
  return (
    <div>
      <button style={style} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
