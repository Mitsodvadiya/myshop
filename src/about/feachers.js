const Feachers = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-6 p-0" tabIndex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
                        data-bs-placement="bottom" data-bs-content="You will got a coupan which is used for got discount.">
                        <img src={props.src1} alt="" />
                        <h6 className="mt-3">{props.head1}</h6>
                    </div>
                    <div className="col-6 p-0" tabIndex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
                        data-bs-placement="bottom" data-bs-content="You can Also got your order at your home without any tension!!">
                        <img src={props.src2} alt="" />
                        <h6 className="mt-3">{props.head2}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feachers