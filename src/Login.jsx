import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:777/login", {
        emailId,
        password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row">
        <div className="justify-items-center my-5">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h1 className="card-title font-bold text-center my-5">
                {" "}
                Login Dashboard
              </h1>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">User Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={emailId}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Passowrd {password}</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={password}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="card-action items-center text-center m-2">
              <button className="btn btn-active btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== */}
    </>
  );
};

export default Login;
