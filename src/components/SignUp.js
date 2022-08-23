import axios from 'axios';
import React, { useState } from "react";

function SignUp() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
    e.preventDefault();
    const data =  await axios.post(`http://localhost:8080/api/sign-up`, { userName, password});

    return data;
    };

  return (
    <div>
        <div className="sign-up-div">
            <h1>SignUp</h1>

                <form>
                    <input onChange={(e)=>setUserName(e.target.value)} type="text" className="input-text" placeholder='Username' />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="input-text" placeholder='Password' />
                    
                    <button type="submit" onClick ={signUp} className="form-button">Sign up</button>
                </form>

        </div>
    </div>
)
}

export default SignUp;
  