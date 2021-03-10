import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteTurtle(props) {
  const history = useHistory();

  const [mess, setMess] = useState('');
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5000/turtles/${props.id}`)
      .then((res) => {
        console.log(res);
        if (res.data) {
          setMess(res.data.message);
          setTimeout(() => {
            props.triggerForm();
            history.push('/');
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <p>Do you really want to delete?</p>
        <button onClick={deleteHandler}>Yes</button>
        <button onClick={() => props.triggerForm()}>No</button>
      </div>
      <p>{mess}</p>
    </div>
  );
}

export default DeleteTurtle;
