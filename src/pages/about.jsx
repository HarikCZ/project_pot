import { NextPage } from "next";
import Navbar from '../components/navbar'


const About = () => {
    return <>
        <Navbar/>
        <div className="about">
            <article className="centerStage">
                <h2>I'm a developer working on this project for a school and for a graduation project</h2><br></br>
                <h3>The story about this project was as follows:</h3><br></br>
                <p>In the third year of highschool, we had to choose a project for graduation.</p>
                <p>There were project topics that the teachers provided to us, but i insisted to do this.</p>
                <p>When i chose this project, Mrs Janů took a lead to this project.</p>
                <p>After the summer break, i started to work on this project.</p>
                <p>Made the first little steps.</p>
                <p>The basic layout, some css, basic page layout and so on.</p>
                <p>Then the problems came by.</p>
                <p>I started to work on the actuall flowerpot and the software behind it.</p>
                <p>On the Raspberry Pi, I went and installed the OS and then Python, because there were relatively easily accessable libraries for the sensosr i had.</p>
                <p>But the big mistake was to stick with the first, easier to setup, but harder to work with method.</p>
                <p>I chose to use Firebase Realtime Database.</p>
                <p>The Realtime Database was at the time the obvious option, because it was by the name, "realtime".</p>
                <p>I set up the RPi to send data to it and it worked.</p>
                <p>But reading the data from the frontend was a lot more difficult than i anticipated.</p>
                <p>I just couldn't make it work and got stuck on it for too long.</p>
                <p>When the situation reached a breaking point, i bit my tongue and started working on it for good.</p>
                <p>I rewrote the code on the RPi to send the data from sensors to the standard Firestore, which made it a lot easyer to read on the frontend.</p>
                <p>I assambled the whole flowerpot with all of the sensors and the RPi into the flowerpot i've designed and made my girlfriend print on her 3D printer.</p>
                <p>Made some final touches to it and continued working on the software again.</p>
                <p>With the software, I made a good progress from the way it looked then.</p>
                <p>I made the site work relatively intuitively for at least my family that I shown my project.</p>
                <p>When the time had come, i did the last couple of things just to make it mostly work.</p>
                <p>There are still a lot of work to do.</p>
                <p>I need to make the site look a lot better, I need to add the authentification and a lot more stuff I'm forgetting.</p>
                <p>For the graduation project, this is what I made, a "working" site that displays the data to the user in an intuitive Ui that anyone using the site would understand what he is looking at.</p>
                <p>I cannot work at the project anymore, since it is allready submited, but I certainly will work at it after the school and hopefully make it a real thing that people could buy or make their own, since all the stuff but the software is of the shelf.</p>
            </article>
            <article className="centerStage">
                <p>So i've failed to make this project good enough to success and for the school to let me graduate.</p>
                
            </article>

        </div>
    </>
}

export default About