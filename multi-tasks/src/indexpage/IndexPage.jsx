import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-8">React Multi-Tasks</h1>

      <div className="flex flex-col gap-4">
        <Link
          to="/task1"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Go to Task 1 - Profile Card
        </Link>

        <Link
          to="/task2"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Go to Task 2 - Registration Form
        </Link>
      </div>
    </div>
  );
}
