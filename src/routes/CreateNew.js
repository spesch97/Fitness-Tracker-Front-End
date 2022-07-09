import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewRoutine } from "../api";
import NewActivity from "../components/NewActivity";
import NewRoutine from "../components/NewRoutine";

const CreateNew = ({ token }) => {
  return (
    <>
      <NewRoutine token={token} />
      <NewActivity token={token} />
    </>
  );
};

export default CreateNew;
