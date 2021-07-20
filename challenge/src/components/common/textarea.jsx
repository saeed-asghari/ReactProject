import React from "react";
const TextArea = ({name,lable,rows,error,...rest}) => {//rest other property
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <textarea
        {...rest}
        rows={rows}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
