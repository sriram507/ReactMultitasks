import { useState } from "react";
import UserCard from "./components/UserCard";
import profilePic from "./assets/images/IMG_20180421_212459_HDR.jpg";

export default function Task1() {
  const [isVisible, setIsVisible] = useState(true);

  const user = {
    name: "Sriram",
    age: 28,
    location: "Hyderabad, India",
    avatar: profilePic, 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-2 mb-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {isVisible ? "Hide Profile" : "Show Profile"}
      </button>

      {isVisible && <UserCard user={user} />}
    </div>
  );
}
