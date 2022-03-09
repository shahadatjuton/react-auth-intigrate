import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { googleSignIn } = useFirebase();

  return (
    <div>
      <h2>Login Page</h2>
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
          <button>Log In</button>
        </div>
        <div className="registered">
          Did not Registered yet? <Link to="/register">Click Here</Link>
        </div>

        <div className="social-login">
          <button onClick={googleSignIn}>Google Login</button>
          <button>Facebbok Login</button>
          <button>GitHub Login</button>
        </div>
      </form>

      {/* <div className="user-details">
        <h1>name:{user.displayName}</h1>
        <p>email:{user.email}</p>
      </div> */}
    </div>
  );
};

export default Login;
