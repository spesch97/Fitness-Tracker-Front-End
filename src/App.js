import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile, Login, Register, Routines, Activities, CreateNew } from "./routes";

function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  return (
    <div className="App">
      <header className="nav_header">
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/activities">
          Activities
        </Link>
        <Link className="nav" to="/routines">
          Routines
        </Link>
        {token ? (
          <Link className="nav" to={`/${username}/routines`}>
            Profile
          </Link>
        ) : null}
        {token ? null : (
          <Link className="nav" to="users/register">
            Register
          </Link>
        )}
        {token ? null : (
          <Link className="nav" to="users/login">
            Login
          </Link>
        )}
        {token ? (
          <Link className="nav" to="/new-routine-activity">
            New
          </Link>
        ) : null}
      </header>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="users/login"
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                setToken={setToken}
              />
            }
          />
          <Route
            path="users/register"
            element={
              <Register
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path={`/${username}/routines`}
            element={
              <Profile
                token={token}
                username={username}
                setToken={setToken}
                setUsername={setUsername}
              />
            }
          />
          <Route path="routines" element={<Routines token={token} username={username}/>} />
          <Route path="activities" element={<Activities />} />
          <Route path="new-routine-activity" element={<CreateNew token={token} />} />
        </Routes>
      </>
      <footer>Created by Sarah Pesch ©2022</footer>
    </div>
  );
}

export default App;
