import React from "react";

function Alert(props) {
  return (
    <>
      {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
       {props.alert.type} : {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"></button>
      </div>}
    </>
  );
}

export default Alert;
