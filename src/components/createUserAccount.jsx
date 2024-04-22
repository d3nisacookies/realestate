import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function createUserAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!username) {
      newErrors.username = 'This field is required';
    }
    if (!password) {
      newErrors.password = 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const response = await fetch('/api-logic-here-pls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const error = await response.json();
      setErrors(error);
      return;
    }

    // Redirect the user to the home page or dashboard
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {errors.username && <p>{errors.username}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Create User</button>
    </form>
  );
}

export default createUserAccount;