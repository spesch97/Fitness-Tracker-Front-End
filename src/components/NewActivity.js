import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewActivity } from "../api";
import { Input } from "antd";

const NewActivity = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (name && description) {
      await postNewActivity(token, name, description);
      navigate("/activities");
    } else {
      alert("Please fill out name and description");
    }
  };

  return (
    <div className="createNewContainer">
      <h4 className="textBlue">Create New Activity</h4>
      <form onSubmit={submitHandler}>
        <label className="textBlue">Name</label>
        <Input onChange={(e) => setName(e.target.value)} />
        <label className="textBlue">Description</label>
        <Input onChange={(e) => setDescription(e.target.value)} />
        <div className="creatingContainer">
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewActivity;
