import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateTurtle(props) {
  const history = useHistory();
  // console.log(props);
  const [state, setState] = useState({
    name: '',
    speed: '',
    age: '',
    weightKg: '',
  });

  const [mess, setMess] = useState('');
  const [err, setErr] = useState('');

  const changeHandler = (e) => {
    setState((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTurtle = { ...state };

    axios
      .patch(`http://localhost:5000/turtles/${props.id}`, newTurtle)
      .then((response) => {
        if (response.data) {
          setMess('Turtle was updated successfully!');
          setTimeout(() => {
            props.triggerForm();
            history.push('/');
          }, 2000);
        }
      })
      .catch((err) => {
        setErr(`${err.response.data} Please choose different name!`);
        setTimeout(() => {
          setErr('');
        }, 1500);
      }, {});
  };

  return (
    <>
      <h2>Please choose fields you want to update</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='id'>ID</label>
          <input type='text' name='id' value={props.id} readOnly={true} />
        </div>
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

        <button type='submit'>Update</button>
        <button
          disabled={props.disabledBtn}
          onClick={() => {
            props.triggerForm();
          }}
          type='button'
        >
          Cancel
        </button>
      </form>

      <div>
        <p>{mess}</p>
        <p>{err}</p>
      </div>
    </>
  );
}

export default UpdateTurtle;
