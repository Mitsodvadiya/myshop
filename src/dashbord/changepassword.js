import axios from "axios";
import { useState } from "react";
import { gettoken } from "../authentication/tokenstore";
const ChangePassword = () => {
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/user/'
    })
    const [error, seterror] = useState({});
    const [password, setpassword] = useState({
        password: '', password2: ''
    });
    const handelsubmit = e => {
        e.preventDefault();
        let front_error = { succsess: false };
        if (password.password === '') {
            front_error.password = 'This Field is required !';
            front_error.succsess = false;
        }
        else if (password.password.length <= 7) {
            front_error.password = 'Password must be between 8 and 15 characters !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }
        if (password.password2 === "") {
            front_error.password2 = 'This Field is required !';
            front_error.succsess = false;
        }
        else if (password.password2 !== password.password) {
            front_error.passwordmis = 'password mismatch !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }
        console.log(front_error)
        seterror(front_error);
        if (front_error.succsess === true) {
            const { access } = gettoken()
            const headers = { 'Authorization': `Bearer ${access}` }
            console.log('entyered')
            ai.post('changepassword/', password, { headers }).then((response) => {
                console.log(response)
                seterror({ ...error, b_error: response.data.msg, color: 'green' });
            })
                .catch((error) => {
                    console.log(error.response);
                    seterror({ ...error, b_error: error.response.data, color: 'red' });
                })
        }
    }
    return (
        <div className="col-sm-8 my-3 p-5 text-center">
            <form action="" onSubmit={handelsubmit}>
                <input type="password" className="form-control mb-2" placeholder="New Password" value={password.password} onChange={(e) => { setpassword({ ...password, password: e.target.value }) }} />
                {error.password && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password}</p>}
                <input type="password" className="form-control mb-2" placeholder="Confirm Password" value={password.password2} onChange={(e) => { setpassword({ ...password, password2: e.target.value }) }} />
                {error.password2 && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password2}</p>}
                <br />
                <button className="btn btn-primary">Change Password</button>
                {error.mispass && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                    <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.mispass}
                </div>}
                {error.b_error && error.color === 'red' && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                    <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.b_error}
                </div>}
                {error.b_error && error.color === 'green' && <div className="alert alert-danger mt-3" style={{ color: '#75b798', background: '#051b11', borderColor: '#0f5132', textAlign: 'left' }} role="alert">
                    <i class="fa-solid fa-circle-check"></i>&nbsp;{error.b_error}
                </div>}
            </form>
        </div>
    )
}

export default ChangePassword