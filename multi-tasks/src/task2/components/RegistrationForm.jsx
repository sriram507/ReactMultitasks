import { Fragment } from "react";
import FormField from "./FormField";

export default function RegistrationForm({ formData, setFormData, onSubmit, nameRef }) {
  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === "hobby") {
      const newHobbies = [...formData.hobbies];
      newHobbies[index] = value;
      setFormData({ ...formData, hobbies: newHobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addHobby = () => setFormData({ ...formData, hobbies: [...formData.hobbies, ""] });

  const removeHobby = (index) => {
    const newHobbies = formData.hobbies.filter((_, i) => i !== index);
    setFormData({ ...formData, hobbies: newHobbies });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name) return alert("Name is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return alert("Invalid email");
    if (!(Number(formData.age) > 10)) return alert("Age must be > 10");

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
      <Fragment>
        <FormField label="Name">
          <input
            ref={nameRef}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </FormField>

        <FormField label="Email">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </FormField>

        <FormField label="Age">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </FormField>

        <FormField label="Hobbies">
          {formData.hobbies.map((hobby, index) => (
            <div key={index} className="flex mb-2">
              <input
                name="hobby"
                value={hobby}
                onChange={(e) => handleChange(e, index)}
                className="w-full border rounded p-2"
              />
              <button
                type="button"
                onClick={() => removeHobby(index)}
                className="ml-2 bg-red-500 text-white px-2 rounded"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addHobby}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            + Add Hobby
          </button>
        </FormField>

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </Fragment>
    </form>
  );
}
