import { useState } from "react";
import axios from "axios"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";


const Login = () => {
  const [username, setusername] = useState("emilys");
  const [password, setPassword] = useState('emilyspass');
 const dispatch= useDispatch();
 const navigate= useNavigate();
  const handleLogin = async () => {
    
    try {
      const res = await axios.post(BASE_URL, {
        username,
        password,
      });
     
      dispatch(addUser(res.data));
      return navigate("/");
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
                  value={username}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setusername(e.target.value)}
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
