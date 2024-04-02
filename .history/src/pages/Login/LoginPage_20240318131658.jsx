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

    <div
      style={{
        /* Left */

        /* Auto layout */
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "58px",
        position: "absolute",
        width: " 332px",
        height: "589.6px",
        filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "67.6px",
          backgroundImage: `url("/src/assets/logo-rikkei2 2.png")`, // Sử dụng backgroundImage thay vì background
          flex: "none",
          order: "0",
          flexGrow: "0",
        }}
      >
        {/* Nội dung của bạn */}
      </div>
      
    </div>
  );
}
export default LoginPage;
