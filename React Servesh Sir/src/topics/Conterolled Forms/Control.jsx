import React, { useState } from 'react'

const Control = () => {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [pass,setPassword] = useState("");

  let handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  let handleEmail = (e) => {
    setEmail(e.target.value);
  }

  let handlePassword = (e) => {
    setPassword(e.target.value);

  }

  let formSubmit=(e) => {
    e.preventDefault();
    console.log(name,email,pass);
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Enter name' value={name} onChange={handleName}/>
      <br />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" placeholder='Enter Email' value={email} onChange={handleEmail}/>
      <br />
      <br />
      <label htmlFor="">Password</label>
      <input type="text" placeholder='Enter Your Password' value={pass} onChange={handlePassword}/>
      <br />
      <br />
      <button onSubmit={formSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default Control;
