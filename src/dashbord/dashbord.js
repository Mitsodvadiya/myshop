import { removetoken } from "../authentication/tokenstore"
import { useDispatch } from "react-redux";
import { unSetToken } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./changepassword";
import { useState } from "react";
import Address from "./address";
const Dashbord = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setvalue] = useState({
        value: 0
    })
    const handelclick = e => {
        setvalue({ value: e.target.value });
    }
    const handellogout = e => {
        dispatch(unSetToken({ access_token: null }))
        removetoken();
        navigate('/login');
    }
    return (
        <>
            <div className="container-fluid" id="dashbord">
                <div className="row">
                    <div className="col-md-5">
                        <img src="./images/address.svg" alt="" className="mt-5" />
                    </div>
                    <div className="col-md-7">
                        <div className="row" id="dashrow">
                            <ul>
                                <li className={value.value === 0 ? 'active-dash' : ''} value={0} onClick={handelclick} id="change">Change Password</li>
                                <li className={value.value === 0 ? '' : 'active-dash'} value={1} onClick={handelclick} id="address">Address</li>
                                <li className="float-end p-2"><button className="btn btn-outline-danger" onClick={handellogout}>Logout</button></li>
                            </ul>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center" id="change">
                            {(
                                () => {
                                    if (value.value === 0) {
                                        return <ChangePassword />
                                    }
                                    else {
                                        return <Address />
                                    }
                                }
                            )()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashbord