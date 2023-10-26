import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
    const [error, seterror] = useState({})

    const [user, setuser] = useState({
        name: "", email: "", password: "", password2: "", tc: false
    })

    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/user/'
    })

    const handelsubmit = e => {
        e.preventDefault();
        let front_error = { succsess: false };
        if (user.name === "") {
            front_error.name_error = 'This Field is required !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }

        if (user.email === '') {
            front_error.email = 'This Field is required !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }
        if (user.password === '') {
            front_error.password = 'This Field is required !';
            front_error.succsess = false;
        }
        else if (user.password.length <= 7) {
            front_error.password = 'Password must be between 8 and 15 characters !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }
        if (user.password2 === "") {
            front_error.password2 = 'This Field is required !';
            front_error.succsess = false;
        }
        else if (user.password2 !== user.password) {
            front_error.passwordmis = 'password mismatch !';
            front_error.succsess = false;
        }
        else {
            front_error.succsess = true;
        }
        seterror(front_error);
        console.log(front_error)
        if (front_error.succsess === true) {
            console.log('entered');
            ai.post('register/', user).then((response) => {
                console.log(response)
                seterror({ ...error, b_error: response.data.msg, color: 'green' });
            })
                .catch((error) => {
                    console.log(error.response);
                    seterror({ ...error, b_error: error.response.data.email[0], color: 'red' });
                })
        }
    }

    useEffect(() => {
        console.log(error);
    })
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row d-flex flex-column align-items-center justify-content-around">
                    <div id="login" className="col-md-6 text-center bg-dark p-5" style={{ opacity: " 1" }}>
                        <form action='' onSubmit={handelsubmit} >
                            <h1>SingUp</h1>
                            <input type="text" className=" form-control py-2 mb-2" placeholder="Name" value={user.name} onChange={e => setuser({ ...user, name: e.target.value })} />
                            {error.name_error && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.name_error}</p>}
                            <input type="email" required className="form-control  py-2 mb-2" placeholder="Email" value={user.email} onChange={e => setuser({ ...user, email: e.target.value })} />
                            {error.email && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.email}</p>}

                            <input type="Password" className="form-control py-2 mb-2" placeholder="Password" value={user.password} onChange={e => setuser({ ...user, password: e.target.value })} />
                            {error.password && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password}</p>}
                            <input type="Password" className="form-control py-2 mb-3" placeholder="Confirm-Password" value={user.password2} onChange={e => setuser({ ...user, password2: e.target.value })} />
                            {error.password2 && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: 'left' }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.password2}</p>}

                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" name='tc' onChange={(e) => { setuser({ ...user, tc: e.target.checked }) }} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>

                            <button className="btn btn-outline-info py-2 px-5" type="submit" >SignUp</button>
                            {error.passwordmis && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.passwordmis}
                            </div>}
                            {error.b_error && error.color === 'red' && <div className="alert alert-danger mt-3" style={{ color: '#ea868f', background: '#2c0b0e', borderColor: '#842029', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-triangle-exclamation"></i>&nbsp;{error.b_error}
                            </div>}
                            {error.b_error && error.color === 'green' && <div className="alert alert-danger mt-3" style={{ color: '#75b798', background: '#051b11', borderColor: '#0f5132', textAlign: 'left' }} role="alert">
                                <i class="fa-solid fa-circle-check"></i>&nbsp;{error.b_error}
                            </div>}

                            <small>Make Your Account Free in Myshop.<br />If you alrady Created Your Account then Plese <Link
                                to="/login">Login</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup