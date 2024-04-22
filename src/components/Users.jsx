import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import createUserAccount from './createUseraccount';

function Users() {
  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/createUserAccount">Create User</Link>
        </li>
        <li>
          <Link to="/users/read">Read Users</Link>
        </li>
        <li>
          <Link to="/users/update">Update Users</Link>
        </li>
        <li>
          <Link to="/users/search">Search Users</Link>
        </li>
        <li>
          <Link to="/users/delete">Delete Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Users;