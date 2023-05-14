import React from "react";

export default function Alert(props) {

  return (
    <div style={{height:"50px"}}>{
    props.message && <div>
      <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
        <strong>{props.message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    }
    </div>
  );
}
