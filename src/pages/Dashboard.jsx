import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import '../styles/Dashboard.css';
import mockData from '../data/mockData.json';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users'));
    if (savedUsers) {
      setUsers(savedUsers);
    } else {
      setUsers(mockData);
      localStorage.setItem('users', JSON.stringify(mockData));
    }
  }, []);

  const updateLocalStorage = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (user) => {
    const name = prompt('Edit Name', user.name);
    const email = prompt('Edit Email', user.email);
    if (name && email) {
      const updated = users.map((u) =>
        u.id === user.id ? { ...u, name, email } : u
      );
      updateLocalStorage(updated);
    }
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const filtered = users.filter((user) => user.id !== id);
      updateLocalStorage(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h3>Users List</h3>
        <Table data={users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Dashboard;
