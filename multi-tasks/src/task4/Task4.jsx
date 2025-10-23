import { useEffect, useMemo, useState, useCallback } from "react";
import useTodos from "./hooks/useTodos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

export default function Task4() {
  const { todos, addTodo, toggleTodo, removeTodo, stats } = useTodos({ persist:true });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const el=document.querySelector("#task4-root input");
    if(el) el.focus();
  }, []);

  const filteredTodos = useMemo(()=>{
    if(filter==="completed") return todos.filter(t=>t.completed);
    if(filter==="pending") return todos.filter(t=>!t.completed);
    return todos;
  },[todos,filter]);

  const handleAdd = useCallback(title=>addTodo(title),[addTodo]);
  const handleToggle = useCallback(id=>toggleTodo(id),[toggleTodo]);
  const handleRemove = useCallback(id=>removeTodo(id),[removeTodo]);

  return (
    <div id="task4-root" className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Todo Manager — Performance Optimized</h1>
        <AddTodo onAdd={handleAdd}/>
        <FilterBar filter={filter} setFilter={setFilter}/>
        <TodoList todos={filteredTodos} onToggle={handleToggle} onRemove={handleRemove}/>
        <Stats stats={stats}/>
      </div>
    </div>
  );
}
