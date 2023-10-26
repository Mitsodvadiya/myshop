const Banner = (props) => {
    if(props.op === true){
        return (
            <>
                <div className="container-fluid mb-5 banner" style={{backgroundImage:props.src}}>
                    <div className="container ">
                        <div className="row d-flex flex-column align-items-center text-center justify-content-center ">
                            <h1>{props.h1}</h1>
                            <small>{props.p}</small>
                            <div className="input-group my-3" id="search">
                                <input type="text" className="form-control" placeholder="Search.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
                <div className="container-fluid mb-5 banner" style={{backgroundImage:props.src}}>
                    <div className="container ">
                        <div className="row d-flex flex-column align-items-center text-center justify-content-center ">
                            <h1>{props.h1}</h1>
                            <small>{props.p}</small>
                        </div>
                    </div>
                </div>
            </>
    )
}
export default Banner;