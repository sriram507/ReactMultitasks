import React from "react";
const TodoItem = React.memo(({ todo, onToggle, onRemove }) => (
  <li className="flex items-center justify-between p-2 border-b">
    <div className="flex items-center gap-3">
      <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} />
      <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.title}</span>
    </div>
    <button onClick={()=>onRemove(todo.id)} className="text-sm px-2 py-1 border rounded">Delete</button>
  </li>
));
export default TodoItem;
