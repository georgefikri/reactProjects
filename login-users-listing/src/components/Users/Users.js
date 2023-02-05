import React, { useState, useEffect } from 'react';
import { getUsers } from '../../API/GET';
import './users.css';
import { useNavigate } from 'react-router-dom';

function Users(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="users">
      <h1>Users</h1>
      <button onClick={handleGoBack}>Go Back</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
