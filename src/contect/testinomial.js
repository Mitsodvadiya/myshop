const Teatinomial = (props) => {
    return (
        <>
            <div className="row my-5 ms-md-3">
                <div className="col-lg-4">
                    <img src={props.src} alt={props.t_name} />
                </div>
                <div className="col-md-8">
                    <h4>{props.t_name}</h4>
                    <small>{props.work}</small><br />
                    <small>phone : {props.phone}</small><br />
                    <small>Email : {props.email}</small>
                </div>
            </div>
        </>
    )
}
export default Teatinomial;