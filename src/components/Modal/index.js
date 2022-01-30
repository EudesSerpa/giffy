import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="btn btnX">
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}> {children} </Modal>,
    document.getElementById("modal-root")
  );
}
