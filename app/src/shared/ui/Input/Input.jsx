import React from "react";
const Input = ({ label, required, className = "", ...props }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">
      {label} {required && <span className="text-danger">*</span>}
    </label>
    <input className={`form-control ${className}`} {...props} />
  </div>
);
