import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  //console.log({ user });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeUsername = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
    //console.log(email.value);
    //console.log(user.email);
    //console.log(username.value);
    //changeUsername();
    if (username.value === '') {
      if (email.value.indexOf('@') !== -1) {
        setUser({
          ...user,
          email: email.value,
          username: email.value.split('@')[0],
        });
        console.log(user);
      } else {
        setUser({
          ...user,
          email: email.value,
          username: '',
        });
        console.log(user);
      }
    } else {
      setUser({
        ...user,
        email: email.value,
        username: user.username,
      });
    }
  };

  // console.log(user);

  return (
    <>
      <h1>REGISTRATION</h1>
      <div className="round big-size">
        <div className="round medium-size">
          <img className="round small-size" />
        </div>
      </div>
      <form onSubmit={handleSubmit} id="formik">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChangeUsername}
          value={user.email}
        />
        <br />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          onChange={handleChange}
          value={user.username || ''}
        />
        <br />

        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <br />

        <input
          type="text"
          id="password-confirm"
          name="passwordConfirm"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirm}
        />
        <br />
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};

export default Registration;
