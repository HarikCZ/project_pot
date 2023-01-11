import { NextPage } from "next";
import { Heading } from '../components/heading'


const News: NextPage = () => {
    return <>
        <div className="news-page">
            <Heading/>
            <article>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className="qrcode">
                    <img src='https://cdn.me-qr.com/qr/44449560.png?v=1673470172' alt='Create qr code for free'></img>
                </a>
            </article>

        </div>
    </>
}

export default News