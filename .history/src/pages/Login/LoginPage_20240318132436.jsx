import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "/src/features/auth/authSlice.js";
import "./Login.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { status, error } = useSelector((state) => state.login);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Email:
    //       <input type="text" name="email" value={credentials.email} onChange={handleChange} />
    //     </label>
    //     <label>
    //       Password:
    //       <input type="password" name="password" value={credentials.password} onChange={handleChange} />
    //     </label>
    //     <button type="submit">Log In</button>
    //   </form>
    //   {status === 'loading' && <p>Loading...</p>}
    //   {error && <p>{error.message}</p>}
    // </div>
<div style={{
    /* Login Form */
    boxSizing: "border-box",
    position: "absolute",
    width: "864px",
    height: "800px",
    background: "#FFFFFF",
    border: "1px solid #000000",
    borderRadius: "15px",
}}>
    {/* Nội dung của bạn */}
</div>

  );
}
export default LoginPage;
