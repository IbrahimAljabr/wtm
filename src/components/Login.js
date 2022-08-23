import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {

    const navigate = useNavigate();

  return (
    <div>
        <div className="sign-up-div">
            <h1>Login</h1>

                <form>
                    <input type="text" className="input-text" placeholder='Username' />
                    <input type="password" className="input-text" placeholder='Password' />
                    <button type="submit" className="form-button">Login</button>
                </form>

            <h2 onClick={() => navigate(`/sign-up`)}>Or Sign up -{'>'}</h2>
        </div>
    </div>
)
}
  
export default Login;
