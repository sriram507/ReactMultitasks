import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./indexpage/IndexPage";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </Router>
  );
}

export default App;
