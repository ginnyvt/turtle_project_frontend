import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Turtle from './Turtle';
import './ListTurtles.css';

function ListTurtle() {
  const [turtles, setTurtles] = useState([]);
  const [mess, setMessage] = useState('Loading');

  useEffect(() => {
    axios
      .get('http://localhost:5000/turtles')
      .then((res) => {
        if (res.data.length > 0) {
          setTurtles(res.data);
        } else {
          setMessage(
            <>
              <p>You dont have any turtles!</p>
              <p>
                Start creating new one{' '}
                <Link to='/new-turtle' style={{ fontWeight: 'bold' }}>
                  here
                </Link>
              </p>
            </>
          );
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  if (turtles.length > 0) {
    return (
      <>
        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>speed</th>
              <th>age</th>
              <th>weightKg</th>
            </tr>
          </thead>
          <tbody>
            {turtles.map((t) => {
              return <Turtle key={t.id} turtle={t} />;
            })}
          </tbody>
        </table>
      </>
    );
  } else {
    return <div>{mess}</div>;
  }
}

export default ListTurtle;
