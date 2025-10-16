import { HashRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./indexpage/IndexPage";
import Task1 from "./task1/Task1";

function App() {
  const basename =
    process.env.NODE_ENV === "production" ? "/ReactMultitasks" : "/";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
    </Router>
  );
}

export default App;
