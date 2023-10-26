import Banner from "../banners/banner"
import { useState } from "react"
import Pagination from "../home/pagination"
import Post from "./post"
const Blog = () => {
    const [Article, setArticle] = useState([{
        src: './images/blog/b6.jpg',
        date: '26-january-2022',
        heading: 'The Cotton-Jersey Zip-Up Hoodie',
        p: "lorem ipsum dolor sit amet, con looremLorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit eos delectus illum!Possimus expedita eveniet amet aperiam veritatis dolores cupiditate quod veniam voluptatesdignissimos."
    },
    {
        src: './images/blog/b4.jpg',
        date: '01-March-2021',
        heading: 'How to Style a Quiff',
        p: "lorem ipsum dolor sit amet, con looremLorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit eos delectus illum!Possimus expedita eveniet amet aperiam veritatis dolores cupiditate quod veniam voluptatesdignissimos."
    },
    {
        src: './images/blog/b2.jpg',
        date: '26-january-2022',
        heading: 'Runway-Inspired Trends',
        p: "lorem ipsum dolor sit amet, con looremLorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit eos delectus illum!Possimus expedita eveniet amet aperiam veritatis dolores cupiditate quod veniam voluptatesdignissimos."
    },
    {
        src: './images/blog/b3.jpg',
        date: '15-Auguest-2020',
        heading: 'Must-Have Skater Girl Items',
        p: "lorem ipsum dolor sit amet, con looremLorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit eos delectus illum!Possimus expedita eveniet amet aperiam veritatis dolores cupiditate quod veniam voluptatesdignissimos."
    }
    ])
    return (
        <>
            <Banner src="url(./images/banner/b19.jpg)" h1='#stayhome' p='save more with coupans and get 70% off' op={false} />
            <div className="container" id="blog_main">
                {Article.map((value, index) => {
                    return <Post src={value.src} date={value.date} heading={value.heading} p={value.p} />
                })}
            </div>
            <Pagination />
        </>
    )
}
export default Blog