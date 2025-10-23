export default function Stats({ stats }) {
  return (
    <div className="mt-4 text-sm text-gray-700">
      <div>Total Todos: {stats.total}</div>
      <div>Completed: {stats.completed}</div>
      <div>Pending: {stats.pending}</div>
    </div>
  );
}
