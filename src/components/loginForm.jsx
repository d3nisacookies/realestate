import React, { useState } from "react";
import {Link} from "react-router-dom";
import RegisterForm from "./register";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!username) {
      newErrors.username = "This field is required";
    }
    if (!password) {
      newErrors.password = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    console.log("login successful!", { username, password });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        className="form-control"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {errors.username && <p>{errors.username}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        className="form-control"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <p>{errors.password}</p>}
    
    <select>
      <option value = "login as">Login As</option>
      <option value = "system admin">System admin</option>
      <option value = "real estate agent">Real estate agent</option>
      <option value = "seller">Seller</option>
      <option value = "buyer">Buyer</option>


    </select>

      <button type="submit" className= "btn btn-primary"disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <Link to = "/register">Dont't have an account? Register herer!!</Link>
    </form>
  );
}

export default LoginForm;