import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function NotificationModal({ message, onClose }) {
  useEffect(() => {
    console.log("Modal opened!");
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center">
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
