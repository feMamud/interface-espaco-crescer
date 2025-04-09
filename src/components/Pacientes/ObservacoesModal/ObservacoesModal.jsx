import { useEffect } from "react";
import "./ObservacoesModal.css";

const ObservacoesModal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden"; // trava scroll
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto"; // destrava scroll
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default ObservacoesModal;
