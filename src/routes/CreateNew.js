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
