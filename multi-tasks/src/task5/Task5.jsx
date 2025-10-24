import { useEffect, useState } from "react";
import axios from "axios";

export default function Task5() {
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState({});

  // 1️⃣ Initial fetch using fetch()
  useEffect(() => {
    const fetchInitialUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialUsers();
  }, []);

  // 2️⃣ Load More using axios
  const loadMore = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // Simulate pagination (fetch next 5)
      setUsers(prev => [...prev, ...res.data.slice(0, 5)]);
      setVisibleCount(prev => prev + 5);
    } catch {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  // 3️⃣ Toggle Details
  const toggleDetails = id => {
    setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 4️⃣ Filter by Search
  const filteredUsers = users
    .slice(0, visibleCount)
    .filter(u =>
      [u.name, u.email].some(v =>
        v.toLowerCase().includes(search.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-center mb-4">
          👥 User Directory App
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        {loading && <p className="text-gray-500 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <ul className="divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <li key={user.id} className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-500">
                      City: {user.address.city}
                    </p>
                    {showDetails[user.id] && (
                      <div className="mt-2 text-sm text-gray-700">
                        <p>📞 {user.phone}</p>
                        <p>🌐 {user.website}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleDetails(user.id)}
                    className="text-blue-600 text-sm underline"
                  >
                    {showDetails[user.id] ? "Hide" : "View"} Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!loading && !error && visibleCount < users.length && (
          <button
            onClick={loadMore}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Load More Users
          </button>
        )}
      </div>
    </div>
  );
}
