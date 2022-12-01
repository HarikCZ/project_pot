import { NextPage } from "next";
import { Heading } from './heading'


const About: NextPage = () => {
    return <>
        <div className="about">
            <Heading/>
            <article className="centerStage">
                <h3>I'm a developer working on this project for a school and for a graduation project</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio quaerat ab quae aspernatur impedit! Corrupti soluta sit quae molestias. Quibusdam sint voluptatibus reiciendis recusandae ad sapiente? Quia, voluptates excepturi.</p>
            </article>

        </div>
    </>
}

export default About