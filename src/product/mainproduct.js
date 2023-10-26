import Product from "./product"
import axios from "axios"
import { useEffect, useState } from "react"

const P_main = (props) => {
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/product/'
    })
    const [value, setvalue] = useState();
    async function getdata() {
        const response = await ai.get('products/');
        let result = response.data;
        setvalue({ Product: result, mainlist: result });
    }
    const handelfillter = e => {
        let values = value.mainlist
        if (e.target.attributes.value.value === 'm' || e.target.attributes.value.value === 'w' || e.target.attributes.value.value === 'all') {
            let filterproduct = values?.filter((product) => {
                if (product.product_category === e.target.attributes.value.value) {
                    return product;
                }
                if (e.target.attributes.value.value === 'all') {
                    return product
                }
            })
            setvalue({ ...value, Product: filterproduct })
        }
        if (e.target.attributes.value.value === 'assending') {
            let filterproduct = [...values].sort((a, b) => a.product_price - b.product_price);
            console.log(filterproduct);
            setvalue({ ...value, Product: filterproduct })
        }
        if (e.target.attributes.value.value === 'desending') {
            let filterproduct = [...values].sort((a, b) => b.product_price - a.product_price);
            console.log(filterproduct);
            setvalue({ ...value, Product: filterproduct })
        }
    }
    useEffect(() => {
        getdata();
    }, []);
    if (props.op === true) {
        return (
            <>
                <div className="container" id="items" >
                    <div className="row text-center mb-4 feature">
                        <div className="col-12">
                            <h1>{props.heading}</h1>
                            <p>{props.p}</p>
                        </div>
                    </div>
                    <div className="row product d-flex align-items-center justify-content-around">
                        {value?.Product?.map((value, index) => {
                            return <Product pd={value} key={index} />
                        })}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container mb-5 mt-0">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="dropdown text-end">
                            <button className="dropdown-toggle show btn btn-dark" role="button" data-bs-toggle="dropdown"
                                aria-expanded="true" id="dropdownbtn">
                                Collaction
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark " data-bs-popper="static">
                                <li><a value='m' className="dropdown-item" onClick={handelfillter}>Man</a></li>
                                <li><a value='w' className="dropdown-item" onClick={handelfillter}>Woman</a></li>
                                <li><a value='assending' className="dropdown-item" onClick={handelfillter}>assending order</a></li>
                                <li><a value='desending' className="dropdown-item" onClick={handelfillter}>desending order</a></li>
                                <li><a value='all' className="dropdown-item" onClick={handelfillter}>all</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="items" >
                <div className="row product d-flex align-items-center justify-content-around">
                    {value?.Product?.map((value, index) => {
                        return <Product pd={value} key={index} />
                    })}
                </div>
            </div>
        </>
    )

}

export default P_main;