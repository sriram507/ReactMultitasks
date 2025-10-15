
export default function IndexPage() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginTop: "50px"
    }}>
      <h1>React Multitasks</h1>
      <p>Select a task to view:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="https://sriram507.github.io/ReactMultitasks/task1">Task 1</a></li>
        {/* <li><a href="https://sriram507.github.io/ReactMultitasks/task2">Task 2</a></li>
        <li><a href="https://sriram507.github.io/ReactMultitasks/task3">Task 3</a></li> */}
      </ul>
    </div>
  );
}
