import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const courses = ["Data Structures", "Operating Systems", "DBMS"];
  const groups = ["DSA Warriors", "OS Night Study"];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <h3>My Courses</h3>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h3>My Groups</h3>
      <ul>
        {groups.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
