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
    <div className="px-16 pt-9 pb-20 bg-white rounded-2xl border border-black border-solid max-w-[864px] max-md:px-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-5 items-start text-3xl font-bold leading-9 text-slate-900 max-md:mt-10">
          <div className="flex flex-col grow shrink-0 self-start shadow-sm basis-0 w-fit">
            <img
              loading="lazy"
              srcSet="..."
              className="max-w-full aspect-[2.94] w-[200px]"
            />
            <div className="mt-14 max-md:mt-10">
              Welcome to
              <br />
              RikkeiEdu LMS
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b44504f6bafce94215c89c237baedc99e9c2fc8c976ccfa45e6bd2fca411659?"
              className="mt-14 w-full aspect-[0.99] max-md:mt-10"
            />
          </div>
          <div className="shrink-0 self-end mt-11 w-px border border-black border-solid shadow-sm h-[641px] max-md:mt-10" />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-sm font-medium text-gray-600 max-md:mt-10">
          <div className="text-base leading-8 text-slate-900">Email</div>
          <div className="flex gap-4 px-5 py-4 mt-3.5 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200 leading-[214%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e9339cc52dfc743fba60af9f92daa9bd44fc82e9670e1706f94650550a9f59?"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="flex-auto">abc@gmail.com</div>
          </div>
          <div className="mt-7 text-base leading-8 text-slate-900">
            Password
          </div>
          <div className="flex gap-5 justify-between px-4 py-4 mt-3.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200">
            <div className="flex gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94785be237ccd3c019b1f4d221882faf3f567a4350feebdf28bdb006fb985c31?"
                className="shrink-0 aspect-square w-[18px]"
              />
              <div className="my-auto">*************</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d4a63ec8df325c4e0a7aba4f998e103f96c4922ff15d6aa70df2580a346e8ff?"
              className="shrink-0 aspect-square w-[18px]"
            />
          </div>
          <div className="justify-center items-center px-16 py-5 mt-4 text-base leading-8 text-center text-white bg-red-700 rounded-md max-md:px-5">
            Sign In
          </div>
          <div className="self-center mt-7 text-center leading-[214%]">
            Forgot password?
          </div>
          <div className="self-center mt-4 leading-8 text-center text-red-700">
            Bạn không có tài khoản?{" "}
            <span className="text-red-700">Tạo tài khoản</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LoginPage;
