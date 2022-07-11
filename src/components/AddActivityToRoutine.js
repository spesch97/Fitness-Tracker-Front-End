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
    <form className="columnContainer" onSubmit={submitHandler}>
      <label className="textBlue">Count</label>
      <input onChange={(e) => setCount(e.target.value)} />
      <label className="textBlue">Duration</label>
      <input onChange={(e) => setDuration(e.target.value)} />
      <label className="textBlue">Activity Id</label>
      <input onChange={(e) => setRoutineActivityId(e.target.value)} />
      <div className="creatingContainer">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default AddActivityToRoutine;
