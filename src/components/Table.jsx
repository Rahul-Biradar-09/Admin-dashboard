// src/components/Table.jsx
import React from 'react';
import '../styles/Table.css';

function Table({ data, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">No users found.</td>
            </tr>
          ) : (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="actions-cell">
                  <button className="edit-btn" onClick={() => onEdit(user)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => onDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

