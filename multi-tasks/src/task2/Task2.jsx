import { useState, useRef, useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm";

export default function Task2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    hobbies: [""],
  });

  const [success, setSuccess] = useState(false);
  const nameRef = useRef();

  // Focus the Name input on page load
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
    setSuccess(true);
    setFormData({ name: "", email: "", age: "", hobbies: [""] });
    nameRef.current.focus(); // Reset focus to Name input
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">User Registration</h1>

      <RegistrationForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        nameRef={nameRef}
      />

      {success && <p className="text-green-600 mt-4">Registration Successful!</p>}
    </div>
  );
}
