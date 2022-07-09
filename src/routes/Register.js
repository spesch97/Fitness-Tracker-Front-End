import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../api";

const Register = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const authFormSubmitHandler = async (event) => {
    event.preventDefault();
    const data = await fetchRegister(username, password);
    if (data.message === "thank you for signing up") {
      setPassword("");
      setUsername("");
      alert("Registration successful. Please login.");
      navigate("users/login");
    } else {
      alert(`${data.message}`);
    }
  };
  return (
    <>
      <h3 className="subtitle">Register</h3>
      <h6 className="subSubtitle">
        To register please create a username and a password with at least 8
        characters
      </h6>
      <form id="login" onSubmit={authFormSubmitHandler}>
        <label>Username</label>
        <input
          placeholder="username"
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label>Password</label>
        <input
          placeholder="minimum of 9 characters"
          id="pasword"
          type="password"
          value={password}
          minLength={9}
          onChange={passwordChangeHandler}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
