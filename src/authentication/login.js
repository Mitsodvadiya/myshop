import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios";
import { gettoken, store_token } from './tokenstore'
import { useDispatch } from 'react-redux';
import { setToken } from '../feature/auth/authSlice';

const Login = () => {
    const [error, seterror] = useState({})
    const [loggeduser, setloggeduser] = useState({
        email: '', password: '',
    })
    const dispatch = useDispatch();
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/user/'
    })
    const navigate = useNavigate();
    const handelsubmit = e => {
        e.preventDefault();
        const front_error = {}
        if (loggeduser.email === "") {
            front_error.email = "This field are required !"
            front_error.valid = false;
        }
        else {
            front_error.valid = true;
        }
        if (loggeduser.password === "") {
            front_error.password = "This field are required !"
            front_error.valid = false;
        }
        else {
            front_error.valid = true;
        }
        seterror(front_error);
        if (front_error.valid === true) {
            ai.post('login/', loggeduser).then((response) => {
                console.log(response);
                seterror({ ...error, b_error: response.data.msg, color: 'green', token: response.data.token });
                store_token(response.data.token, response.data.id);
                const { access } = gettoken();
                dispatch(setToken({ access_token: access }));
                navigate('/dashbord');
            })
                .catch((error) => {
                    console.log(error.response);
                    if (error.response !== undefined) {
                        seterror({ ...error, b_error: error.response.data.errors.non_field_errors[0], color: 'red' });
                    }
                })
        }
    }
    const { access } = gettoken();
    useEffect(() => {
        dispatch(setToken({ access_token: access }));
    }, [access, dispatch]);
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row d-flex flex-column align-items-center justify-content-around">
                    <div id="login" className="col-md-6 text-center bg-dark p-5" style={{ opacity: "1" }}>
                        <form onSubmit={handelsubmit} action=''>
                            <h1>Login</h1>
                            <input type="email" className=" form-control py-2 mb-2" placeholder="Email" value={loggeduser.email} onChange={e => { setloggeduser({ ...loggeduser, email: e.target.value }); }} />
                            {error.email && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: "left" }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;{error.email}</p>}

                            <input type="Password" className="form-control py-2" placeholder="Password" value={loggeduser.password} onChange={e => { setloggeduser({ ...loggeduser, password: e.target.value }); }} />
                            {error.password && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: "left" }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;{error.password}</p>}

                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button className="btn btn-outline-info py-2 px-5" type="submit">Login</button>
                            {error.b_error && error.color == 'red' && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.b_error}
                            </div>}
                            {error.b_error && error.color == 'green' && <div className="alert alert-danger mt-3" style={{ color: '#75b798', background: '#051b11', borderColor: '#0f5132', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-circle-check"></i>&nbsp;{error.b_error}
                            </div>}<br />
                            <Link to='/resetpassword' className='float-start' id='forget' style={{ color: 'gray', textDecoration: 'None', fontSize: '12px', margin: '0px', padding: '0px' }}>Forget Password?</Link>

                            <small>If you don't signup then Plese <Link to="/signup">SingUp</Link></small>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;