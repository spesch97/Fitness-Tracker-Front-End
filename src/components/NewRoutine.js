import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewRoutine } from "../api";

const NewRoutine = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (name && goal) {
      await postNewRoutine(token, name, goal, isPublic);
      navigate("/routines");
    } else {
      alert("Please fill out name and goal");
    }
  };

  return (
    <form className="columnContainer" onSubmit={submitHandler}>
      <label className="textBlue">Name</label>
      <input minLength={1} onChange={(e) => setName(e.target.value)} />
      <label className="textBlue">Goal</label>
      <input minLength={1} onChange={(e) => setGoal(e.target.value)} />
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

export default NewRoutine;
