import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Resetpassword = () => {
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/user/'
    })
    const [error, seterror] = useState({});
    const [password, setpassword] = useState({
        password: '', password2: ''
    });
    const { id, token } = useParams()
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
            console.log(id,token);
            ai.post(`reset/${id}/${token}`, password).then((response) => {
                console.log(response)
                seterror({ ...error, b_error: response.data.msg, color: 'green' });
            })
                .catch((error) => {
                    console.log(error.response);
                    seterror({ ...error, b_error: error.response.data.non_field_errors[0], color: 'red' });
                })
        }
    }
    useEffect(() => {
        console.log(error)
    }, [error]);
    return (
        <>
            <div className="container text-center" id='reset'>
                <div className="row d-flex align-items-center justify-content-center py-5">
                    <div className="col-md-6 p-5">
                        <h1 className="mb-3">Reset Password</h1>
                        <form action="" onSubmit={handelsubmit}>
                            <input type="password" name="" id="" className="form-control mb-2" placeholder="New Password" value={password.password} onChange={(e) => { setpassword({ ...password, password: e.target.value }) }} />
                            {error.password && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password}</p>}
                            <input type="password" name="" id="" className="form-control mb-2" placeholder="Confirm Password" value={password.password2} onChange={(e) => { setpassword({ ...password, password2: e.target.value }) }} />
                            {error.password2 && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password2}</p>}
                            <br />
                            <button className="btn btn-primary">Reset Password</button>
                            {error.passwordmis && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.passwordmis}
                            </div>}
                            {error.b_error && error.color === 'red' && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.b_error}
                            </div>}
                            {error.b_error && error.color === 'green' && <div className="alert alert-danger mt-3" style={{ color: '#75b798', background: '#051b11', borderColor: '#0f5132', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-circle-check"></i>&nbsp;{error.b_error}
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resetpassword;