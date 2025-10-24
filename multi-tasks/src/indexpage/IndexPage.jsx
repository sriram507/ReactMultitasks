import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 text-gray-800 p-6">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm">
          React Multi-Task App
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-md leading-relaxed">
          Learn and practice modern React concepts through simple hands-on
          mini-projects.
        </p>

        {/* Task Links */}
        <div className="w-full max-w-sm flex flex-col items-center space-y-6">
          <Link
            to="/task1"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold shadow-md transition-transform hover:scale-105"
          >
            🧩 Task 1 — User Card Display
          </Link>
          <div className="w-3/4 h-[2px] bg-blue-200 rounded-full"></div>

          <Link
            to="/task2"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold shadow-md transition-transform hover:scale-105"
          >
            📝 Task 2 — Registration Form
          </Link>
          <div className="w-3/4 h-[2px] bg-green-200 rounded-full"></div>

          <Link
            to="/task3"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold shadow-md transition-transform hover:scale-105"
          >
            ⚙️ Task 3 — Notifications & Settings
          </Link>
          <div className="w-3/4 h-[2px] bg-purple-200 rounded-full"></div>

          {/* Task 4 Link */}
          <Link
            to="/task4"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-2xl font-semibold shadow-md transition-transform hover:scale-105"
          >
            ✅ Task 4 — Todo Manager
          </Link>

          <Link
            to="/task5"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl font-semibold shadow-md transition-transform hover:scale-105"
          >
            👥 Task 5 — User Directory (API Fetch)
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-500">
          Built with ❤️ using{" "}
          <span className="font-medium text-blue-600">React</span> &{" "}
          <span className="font-medium text-purple-600">Tailwind CSS</span>
        </footer>
      </div>
    </div>
  );
}
