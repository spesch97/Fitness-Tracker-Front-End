import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewActivity, postNewRoutine } from "../api";

const NewActivity = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (name && description) {
      const newActivity = await postNewActivity(
        token,
        name,
        description

      );
      navigate("/activities");
    } else {
      alert("Please fill out name and description");
    }
  };

  return (
    <form className="columnContainer" onSubmit={submitHandler}>
      <label className="textBlue">Name</label>
      <input minLength={1} onChange={(e) => setName(e.target.value)} />
      <label className="textBlue">Description</label>
      <input minLength={1} onChange={(e) => setDescription(e.target.value)} />
      <div className="creatingContainer">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default NewActivity;