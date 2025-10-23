import { useReducer, useCallback, useEffect, useMemo } from "react";
const LOCAL_KEY = "task4_todos_v1";

function id() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}

function reducer(state, action) {
  switch (action.type) {
    case "INIT": return action.payload || [];
    case "ADD": return [...state, { id: id(), title: action.payload.title, completed:false }];
    case "TOGGLE": return state.map(t=>t.id===action.payload.id?{...t,completed:!t.completed}:t);
    case "REMOVE": return state.filter(t=>t.id!==action.payload.id);
    default: return state;
  }
}

export default function useTodos({ persist=true }={}) {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if(!persist) return;
    const raw = localStorage.getItem(LOCAL_KEY);
    if(raw) dispatch({type:"INIT", payload:JSON.parse(raw)});
  }, [persist]);

  useEffect(() => {
    if(persist) localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos, persist]);

  const addTodo = useCallback(title => {
    if(title.trim()) dispatch({type:"ADD", payload:{title:title.trim()}});
  },[]);
  const toggleTodo = useCallback(id=>dispatch({type:"TOGGLE", payload:{id}}),[]);
  const removeTodo = useCallback(id=>dispatch({type:"REMOVE", payload:{id}}),[]);

  const stats = useMemo(()=>{
    const total=todos.length, completed=todos.filter(t=>t.completed).length;
    return { total, completed, pending: total-completed };
  },[todos]);

  return { todos, addTodo, toggleTodo, removeTodo, stats };
}
