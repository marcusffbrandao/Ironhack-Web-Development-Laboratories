import React from 'react';
import { Button } from '../index';

const Table = ({ funcRemove, contacts }) => {
  const data = contacts.map((contact, idx) => {
    return (
      <tr key={idx}>
        <td>
          <img src={contact.pictureUrl} alt={`${contact.name} pic`} width="100px" />
        </td>
        <td>
          {contact.name}
        </td>
        <td>
          {contact.popularity.toFixed(2)}
        </td>
        <td>
          <Button onclick={() => funcRemove(idx)}>Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  );
};

export default Table;
