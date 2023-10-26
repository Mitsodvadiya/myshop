import {Link} from 'react-router-dom'
const Pagination = () => {
    return (
        <>
            <div className="container mypagination">
                <div className="row">
                    <nav aria-label="navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <Link className="page-link" to=''>Previous</Link>
                            </li>
                            <li className="page-item"><Link className="page-link" to="">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to=''>Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Pagination