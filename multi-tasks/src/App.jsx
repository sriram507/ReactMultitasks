import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./indexpage/IndexPage";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import Task3 from "./task3/Task3";
import Task4 from "./task4/Task4";
import Task5 from "./task5/Task5";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
    </Router>
  );
}

export default App;

