import { useState } from "react";
import { updateActivity } from "../api";

const PatchActivity = ({
    token,
    activityId,
  setActivityId,
  setActivities,
  activities
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    await updateActivity(
        token,
        activityId,
        name,
        description,
        setActivities,
        activities,
        setActivityId,
        setName,
        setDescription
    );
  };

  return (
    <div classname="textblue">
    <h4 className="textBlue">Edit Activity</h4>
    <form onSubmit={submitHandler}>
      <label className="textBlue">Name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <label className="textBlue">Description</label>
      <input onChange={(e) => setDescription(e.target.value)} />
      <div className="creatingContainer">
        <button className="button">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default PatchActivity;
