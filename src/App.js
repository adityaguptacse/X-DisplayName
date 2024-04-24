import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [fullName, setFullName] = useState("")

  const submitForm = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData) 
    console.log(payload)
    setFullName(payload.firstName+" "+payload.lastName)

  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
        <form onSubmit={submitForm}>
          <label>First Name:
            <input type='text'
            name='firstName'
            required
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            />
          </label>
          <br />
          <label>Last Name:
            <input type='text'
            name='lastName'
            required
            value={lastName}
            onChange={(e)=>{
              setLasttName(e.target.value)
            }}
            />
          </label>
          <br/>
          <button type='submit'>Submit</button>
          <br/>
          {fullName !== ""? `Full Name: ${fullName}`: ""}
        </form>
        
        {/* {fullName !== ""? `Full Name: ${fullName}`: ""} */}
    </div>
  );
}

export default App;
