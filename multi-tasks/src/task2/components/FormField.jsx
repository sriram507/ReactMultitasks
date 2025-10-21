export default function FormField({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      {children}
    </div>
  );
}
