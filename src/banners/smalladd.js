const Small_add = (props) => {
    return (
        <>
            <div style={{backgroundImage:props.src,backgroundSize:'cover'}} className="col-md-4 d-flex flex-column align-items-center justify-content-center my-3" id="banner-botom" >
                <h2>{props.h2}</h2>
                <h6 style={{ color: "rgb(255, 42, 0)", fontWeight: "bold" }}>{props.h6}</h6>
            </div>
        </>
    )
}

export default Small_add;