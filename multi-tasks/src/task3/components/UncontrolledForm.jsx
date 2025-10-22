import { useRef } from "react";

export default function UncontrolledForm() {
  const userRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uncontrolled Form Data:", {
      username: userRef.current.value,
      password: passRef.current.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded mb-4"
    >
      <h3 className="font-semibold mb-2">Uncontrolled Form</h3>
      <input ref={userRef} placeholder="Username" className="border p-2 w-full mb-2" />
      <input ref={passRef} placeholder="Password" type="password" className="border p-2 w-full mb-2" />
      <button className="bg-blue-600 text-white px-4 py-1 rounded">
        Submit
      </button>
    </form>
  );
}
