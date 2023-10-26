import { Link } from 'react-router-dom'
const Post = (props) => {
    return (
        <>
            <div className="row mb-5">
                <div className="col-md-5">
                    <img src={props.src} alt={props.heading} />
                </div>
                <div className="col-md-7 ps-md-5 d-flex flex-column align-items-start justify-content-center">
                    <span>{props.date}</span>
                    <h3>{props.heading}</h3>
                    <p>{props.p}</p>
                    <Link to='/postdetail'>CONTINUE READING _____</Link>
                </div>
            </div>
        </>
    )
}
export default Post