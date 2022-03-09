import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <form action="">
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="password">
          <label htmlFor="">password</label>
          <input type="password" />
        </div>
        <div className="submit-btn">
          <button>Register</button>
        </div>
        <div className="registered">
            Already Registered? <Link to='/login'>Click Here</Link>
            </div>
      </form>
    </div>
  );
};

export default Registration;
