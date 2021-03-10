import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function FindTurtle() {
  let history = useHistory();
  const [turtleId, setTurtleId] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(turtleId); //string value
    axios
      .get(`http://localhost:5000/turtles/${turtleId}`)
      .then((response) => {
        console.log(response);
        history.push(`/turtles/${turtleId}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='id'>Please enter a turtle's ID</label>
        <input
          type='text'
          name='id'
          value={turtleId}
          onChange={(e) => setTurtleId(e.target.value)}
        />
        <button>Find</button>
      </form>
    </div>
  );
}

export default FindTurtle;
