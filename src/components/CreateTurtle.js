import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

function CreateTurtle() {
  let history = useHistory();
  const [state, setState] = useState({
    name: '',
    speed: '',
    age: '',
    weightKg: '',
  });

  const changeHandler = (e) => {
    setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value,
    }));
  };

  const [mess, setMess] = useState('');
  const [err, setErr] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newTurtle = { ...state };

    axios
      .post('http://localhost:5000/turtles', newTurtle)
      .then((response) => {
        if (response.data) {
          setMess('Turtle was successfully created!');
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
      })
      .catch((err) => {
        // console.log(err.response);
        setErr(`${err.response.data}`);
        setTimeout(() => {
          setErr('');
        }, 2000);
      });
  };
  return (
    <div>
      <h3>Please enter turtle's info</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor='speed'>Speed</label>
          <input
            type='text'
            name='speed'
            value={state.speed}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <input
            type='text'
            name='age'
            value={state.age}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor='weightKg'>Weight in Kgs</label>
          <input
            type='text'
            name='weightKg'
            value={state.weightKg}
            onChange={changeHandler}
          />
        </div>

        <button type='button'>
          <Link to='/'>Back</Link>
        </button>
        <button type='submit'>Create</button>
      </form>

      <div>
        <p>{mess}</p>
        <p>{err}</p>
      </div>
    </div>
  );
}

export default CreateTurtle;
