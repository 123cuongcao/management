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
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6 ">
            <img
              src="/src/assets/logo-rikkei2 2.png"
              className="img-fluid"
              alt="Phone image"
            />
            <div
              style={{
                width: "192px",
                height: "70px",
                fontFamily: "Cabin",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "35px",
                color: "#0A033C",
                flex: "none",
                order: 1,
                flexGrow: 0,
              }}
            >
              {" "}
              Welcome to RikkeiEdu LMSdadsadada 
            </div>

            <img src="/src/assets/5790719 1.png" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#BC2228" }}
              >
                Sign in
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold  mb-0 text-muted"></p>
              </div>
              {/* <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f me-2" />
                Continue with Facebook
              </a>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2" />
                Continue with Twitter
              </a> */}
              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form1Example3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LoginPage;
