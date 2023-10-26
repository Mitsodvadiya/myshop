import {Link} from 'react-router-dom'
const Big_add = (props) => {
    let st1 = 'col-md-6 d-flex flex-column align-items-start justify-content-center ';
    let st2 = props.cname;
    let st = st1.concat(st2);
    console.log(st)
    return (
        <>
            <div className={st}>
                <span style={{ color: "#ffffffdc", fontSize: "19px" }}>{props.h2}</span>
                <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: "bolder" }}>{props.h1}</h3>
                <small>{props.p}</small>
                <Link to=''><button className="btn btn-outline-light">Learn More</button></Link>
            </div>
        </>
    )
}

export default Big_add;