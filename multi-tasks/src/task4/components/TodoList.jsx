import TodoItem from "./TodoItem";
export default function TodoList({ todos, onToggle, onRemove }) {
  if(!todos.length) return <p className="text-gray-500">No todos yet.</p>;
  return <ul className="bg-white rounded shadow overflow-hidden">
    {todos.map(t=> <TodoItem key={t.id} todo={t} onToggle={onToggle} onRemove={onRemove}/>)}
  </ul>;
}
