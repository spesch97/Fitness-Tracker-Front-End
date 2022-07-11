import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  Home,
  Profile,
  Login,
  Register,
  Routines,
  Activities,
  CreateNew,
} from "./routes";
const { Header, Content, Footer } = Layout;

function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  return (
    <Layout className="App">
      <Header className="nav_header">
        <Menu theme="dark" mode="horizontal">
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
              Create New
            </Link>
          ) : null}
        </Menu>
      </Header>
      <Content className="contentBody">
        <div className="site-layout-content">
          <h1>Fitness Tracker</h1>
        </div>
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
          <Route
            path="routines"
            element={<Routines token={token} username={username} />}
          />
          <Route path="activities" element={<Activities token={token} />} />
          <Route
            path="new-routine-activity"
            element={<CreateNew token={token} />}
          />
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Created by Sarah Pesch ©2022
      </Footer>
    </Layout>
  );
}

export default App;
