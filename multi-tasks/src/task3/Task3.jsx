import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import NotificationModal from "./components/NotificationModal";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeToggle from "./components/ThemeToggle";

export default function Task3() {
  const [showModal, setShowModal] = useState(false);
  const [crash, setCrash] = useState(false);

  if (crash) throw new Error("App crashed!");

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <ThemeToggle />

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
        >
          Show Notification
        </button>

        {showModal && (
          <NotificationModal
            message="This is a portal notification!"
            onClose={() => setShowModal(false)}
          />
        )}

        <ErrorBoundary>
          <ControlledForm />
          <UncontrolledForm />
          <button
            onClick={() => setCrash(true)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Crash App
          </button>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}
