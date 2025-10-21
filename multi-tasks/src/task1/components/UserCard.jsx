export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center flex flex-col items-center">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.location}</p>
      <p className="text-gray-500">Age: {user.age}</p>
    </div>
  );
}
