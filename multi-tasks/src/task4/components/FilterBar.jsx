export default function FilterBar({ filter, setFilter }) {
  const buttons=[
    {key:"all",label:"All"},
    {key:"completed",label:"Completed"},
    {key:"pending",label:"Pending"}
  ];
  return (
    <div className="flex gap-2 my-3">
      {buttons.map(b=>(
        <button key={b.key} onClick={()=>setFilter(b.key)}
          className={`px-3 py-1 rounded border ${filter===b.key?"bg-indigo-600 text-white":""}`}>
          {b.label}
        </button>
      ))}
    </div>
  );
}
