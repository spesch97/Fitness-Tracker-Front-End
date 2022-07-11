import { useState } from "react";
import { updateRoutines } from "../api";

const PatchRoutine = ({
  setRoutineId,
  token,
  routineId,
  profiles,
  setProfiles,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    await updateRoutines(
      setRoutineId,
      token,
      routineId,
      profiles,
      setProfiles,
      setName,
      setGoal,
      setIsPublic,
      name,
      goal,
      isPublic
    );
  };

  return (
    <form className="columnContainer" onSubmit={submitHandler}>
      <label className="textBlue">Name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <label className="textBlue">Goal</label>
      <input onChange={(e) => setGoal(e.target.value)} />
      <label className="textBlue">Public</label>
      <input
        className="checkbox"
        type="checkbox"
        onChange={(e) => setIsPublic(e.target.checked)}
      />
      <div className="creatingContainer">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default PatchRoutine;
