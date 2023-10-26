import Banner from "../banners/banner"
import P_main from "./mainproduct"
import Pagination from "../home/pagination"
const Shop = () => {

    return (
        <>
            <Banner src="url(./images/banner/b1.jpg)" h1='#stayhome' p='save more with coupans and get 70% off' op={true} />
            <P_main heading='Featured Products' p='Summer Collaction new model design' />
            <Pagination />
        </>
    )
}
export default Shop