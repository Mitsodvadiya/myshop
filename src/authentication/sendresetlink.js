import { useState } from "react";
import axios from "axios";

const Resetlink = () => {
    const [reset, setreset] = useState({
        email: '',
    })
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/user/'
    })
    const [error, seterror] = useState({})
    const handelsubmit = e => {
        e.preventDefault();
        const front_error = { success: false };
        if (reset.email === '') {
            front_error.email = 'This field is required !';
            front_error.success = false;
        }
        else {
            front_error.success = true;
        }
        seterror(front_error);
        if (front_error.success === true) {
            console.log('entyered')
            const headers = { 'Content-type': 'application/json' };
            ai.post('reset/', reset, { headers }).then((response) => {
                console.log(response)
                seterror({ ...error, b_error: response.data.msg, color: 'green' });
            })
                .catch((error) => {
                    console.log(error.response.data.non_field_errors[0]);
                    seterror({ ...error, b_error: error.response.data.non_field_errors[0], color: 'red' });
                })
        }
    }
    return (
        <>
            <div className="container text-center" id='resetpassword'>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 p-5">
                        <h1 className="mb-3">Reset Password</h1>
                        <form action="" onSubmit={handelsubmit}>
                            <input type="email" name="" value={reset.email} className="form-control mb-2" id="" placeholder="Email" onChange={(e) => { setreset({ email: e.target.value }) }} />
                            {error.email && <p style={{ color: '#ea868f', fontSize: '10px', textAlign: "left" }}><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;{error.email}</p>}
                            <button className="btn btn-primary px-5">send</button>
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
export default Resetlink;