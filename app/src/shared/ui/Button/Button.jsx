import React from "react";

const Button = ({
  children,
  variant = "primary",
  disabled,
  onClick,
  className = "",
  size = "",
}) => {
  const variants = {
    primary: "btn-success",
    secondary: "btn-secondary",
    danger: "btn-danger",
  };

  const sizeClass = size ? `btn-${size}` : "";

  return (
    <button
      className={`btn ${variants[variant]} ${sizeClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
