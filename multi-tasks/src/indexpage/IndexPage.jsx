import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>React Multitasks</h1>
      <p>Select a task to view:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/task1">Task 1</Link>
        </li>
        {/* Example for more tasks:
        <li><Link to="/task2">Task 2</Link></li>
        <li><Link to="/task3">Task 3</Link></li>
        */}
      </ul>
    </div>
  );
}
