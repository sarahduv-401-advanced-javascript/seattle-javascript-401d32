import React from './node_modules/react';

const PersonRow = ({ name, birthdate }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{birthdate}</td>
    </tr>
  )
}

export default PersonRow;