import React from "react";
const Input = ({element,name,lable,error,...rest}) => {//rest other property
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
