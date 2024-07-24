import { useState } from "react";
import { useMutation } from "@apollo/client";
import { NEW_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import "../style/Join.css";

const Join = () => {
  const [joinState, setJoinState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(NEW_USER);

  //below name refers to name in the form fields,
  //whatever 'name' is changed will be updated on screen
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJoinState({
      ...joinState,
      [name]: value,
    });
  };

  const handleJoinSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...joinState },
      });
    } catch (e) {
      console.error(e);
    }
    return <p>Success!</p>;
  };

  return (
    <>
      <h3 className="joinHead">Join Us</h3>
      <form className="joinForm" onSubmit={handleJoinSubmit}>
        <div className="nameDiv">
          <input
            placeholder="First Name"
            className="nameFirst"
            name="firstName"
            value={joinState.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            className="nameLast"
            name="lastName"
            value={joinState.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="userDiv">
          <input
            placeholder="Username"
            className="NameUser"
            name="username"
            value={joinState.username}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            className="wordPass"
            name="password"
            value={joinState.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center">
          <button className="joinBut" type="submit">
            Submit
          </button>
          <button>
            <Link to="/" className="text-black homeBut">
              Home
            </Link>
          </button>
        </div>
      </form>

      {data && (
        <div className="my-3 p-3 text-success text-center comms">
          Success. Please return <Link to="/">home</Link> to log in.
        </div>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white text-center comms">
          Sorry, An error occured.
          {console.log(error.message)}
        </div>
      )}
    </>
  );
};

export default Join;
