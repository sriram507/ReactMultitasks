import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">React Multi-Task App</h1>

      <div className="flex flex-col gap-3">
        <Link to="/task1" className="bg-blue-500 text-white px-4 py-2 rounded text-center">
          Go to Task 1
        </Link>
        <Link to="/task2" className="bg-green-500 text-white px-4 py-2 rounded text-center">
          Go to Task 2
        </Link>
        <Link to="/task3" className="bg-purple-600 text-white px-4 py-2 rounded text-center">
          Go to Task 3
        </Link>
      </div>
    </div>
  );
}
