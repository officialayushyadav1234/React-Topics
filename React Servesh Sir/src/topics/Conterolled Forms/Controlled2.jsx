import React, { useState } from "react";

const Controlled2 = () => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [toggle, setToggle] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  function formSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <mark>using single state</mark>
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type={toggle ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input type="button" value="👁️" onClick={() => setToggle(!toggle)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Controlled2;
