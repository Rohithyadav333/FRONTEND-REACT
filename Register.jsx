
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    university: "",
    year: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} required/>
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} required/>
        <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} required/>
        <input placeholder="University" onChange={(e)=>setForm({...form,university:e.target.value})} required/>
        <input placeholder="Passing Year" onChange={(e)=>setForm({...form,year:e.target.value})} required/>
        <button type="submit">Register</button>
      </form>
      <p>
        Already account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
