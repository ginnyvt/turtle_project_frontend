import React from 'react';
import { Link } from 'react-router-dom';

function Turtle(props) {
  const { id, name, speed, age, weightKg } = props.turtle;
  return (
    <>
      <tr>
        <td className='id-link'>
          <Link to={`/turtles/${id}`}>{id}</Link>
        </td>
        <td>{name}</td>
        <td>{speed}</td>
        <td>{age}</td>
        <td>{weightKg}</td>
      </tr>
    </>
  );
}

export default Turtle;
