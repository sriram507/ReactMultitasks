import { useState } from "react";

export default function ControlledForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Form Data:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded mb-4"
    >
      <h3 className="font-semibold mb-2">Controlled Form</h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full mb-2"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />
      <button className="bg-green-600 text-white px-4 py-1 rounded">
        Submit
      </button>
    </form>
  );
}
