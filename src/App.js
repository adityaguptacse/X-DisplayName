import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  // const [fullName, setFullName] = useState("")
  const [hasShow, setHasShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
    // setFullName(payload.firstName+" "+payload.lastName)
    setHasShow(true);
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={submitForm}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={(e) => {
              setLasttName(e.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />

  
      </form>
      {hasShow && (
          <p>
            Full Name: {firstName} {lastName}
          </p>
        )}
    </div>
  );
}

export default App;
