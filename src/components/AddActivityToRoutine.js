import React from "react";
import { Input, Button } from "antd";
import { useState } from "react";
import { addActivity } from "../api";

const AddActivityToRoutine = ({
  token,
  addRoutineActivityId,
  setAddRoutineActivityId,
  profiles,
  setProfiles,
}) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [routineActivityId, setRoutineActivityId] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    await addActivity(
      token,
      addRoutineActivityId,
      routineActivityId,
      count,
      duration,
      setCount,
      setDuration,
      setRoutineActivityId,
      profiles,
      setProfiles,
      setAddRoutineActivityId
    );
  };

  return (
    <div className="textBlue">
      <h4>Add Activity to Routine</h4>
      <form className="columnContainer" onSubmit={submitHandler}>
        <label className="textBlue">Count</label>
        <Input onChange={(e) => setCount(e.target.value)} />
        <label className="textBlue">Duration</label>
        <Input onChange={(e) => setDuration(e.target.value)} />
        <label className="textBlue">Activity Id</label>
        <Input onChange={(e) => setRoutineActivityId(e.target.value)} />
        <div className="creatingContainer">
          <Button type="primary" className="button">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddActivityToRoutine;
