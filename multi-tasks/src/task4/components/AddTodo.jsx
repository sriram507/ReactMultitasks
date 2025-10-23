import { useRef } from "react";
export default function AddTodo({ onAdd }) {
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    const val=inputRef.current.value.trim();
    if(!val) return;
    onAdd(val);
    inputRef.current.value="";
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input ref={inputRef} placeholder="Enter new todo..." className="border rounded px-3 py-2 flex-1" />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">Add Todo</button>
    </form>
  );
}
