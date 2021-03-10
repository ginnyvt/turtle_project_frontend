import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import UpdateTurtle from './UpdateTurtle';
import DeleteTurtle from './DeleteTurtle';

function GetTurtle() {
  const { turtleId } = useParams();
  const [turtleInfo, setTurtleInfo] = useState({});
  const [disabledEditBtn, setDisabledEditBtn] = useState(false);
  const [disabledDelBtn, setDisabledDelBtn] = useState(false);
  const [triggerEditForm, setTriggerEditForm] = useState(false);
  const [triggerDeleteForm, setTriggerDeleteForm] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/turtles/${turtleId}`)
      .then((res) => {
        setTurtleInfo(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const triggerEditFormHandler = () => {
    setTriggerEditForm(!triggerEditForm);
    setDisabledDelBtn(!disabledDelBtn);
  };

  const triggerDeleteFormHandler = () => {
    setTriggerDeleteForm(!triggerDeleteForm);
    setDisabledEditBtn(!disabledEditBtn);
  };

  return (
    <div>
      <h2>Here is your turtle's information</h2>
      <div>
        <p>ID: {turtleInfo.id}</p>
        <p>Name:{turtleInfo.name}</p>
        <p>Speed:{turtleInfo.speed}</p>
        <p>Age:{turtleInfo.age}</p>
        <p>WeightKg:{turtleInfo.weightKg}</p>
      </div>

      <div>
        <button>
          <Link to='/'>Back</Link>
        </button>

        <button onClick={triggerEditFormHandler} disabled={disabledEditBtn}>
          Edit
        </button>

        <button onClick={triggerDeleteFormHandler} disabled={disabledDelBtn}>
          Delete
        </button>

        <div>
          {triggerEditForm ? (
            <UpdateTurtle
              id={turtleId}
              triggerForm={triggerEditFormHandler}
              disabledBtn={disabledEditBtn}
            />
          ) : null}
          {triggerDeleteForm ? (
            <DeleteTurtle
              id={turtleId}
              triggerForm={triggerDeleteFormHandler}
              disabledBtn={disabledDelBtn}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default GetTurtle;
