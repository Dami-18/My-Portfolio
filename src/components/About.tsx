import myImg from '../assets/myphoto.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="img-container"><img src={myImg}></img></div>
            <div className="about-text"><p id='about-me'>I am Damiya Gondha, a sophomore pursuing computer science and engineering from IIT Kharagpur. 
                <i>"Computer Science is an ocean I dive deep into!"</i> Yes, that holds true for me. I like to get myself immersed in the complexity of data structures, algorithms and software development. (<i>though sometimes DSA and bugs scare me ;-;</i>)
                I am also interested in robotics and currently I am a part of software team at <a href='http://www.agv.iitkgp.ac.in/' target='_blank'>AGV</a>, IIT Kharagpur where I get to explore autonomous robotics. 
                I started exploring open source by contributing to open source organization, <a href='https://github.com/metakgp' target='_blank'>MetaKGP</a>. Currently, I am a core team member at <a href='https://kossiitkgp.org/' target='_blank'>Kharagpur Open Source Society</a>, a bunch of cool open source enthusiasts. Now,
                I have started believing in <i>"coding by humans, for humans"</i> and I find joy in contributing to projects that people use for various tasks.<br/>Apart from these, my interests include reading novels and music. I am an amateur flautist and love playing flute. I am passionate about teaching too and might think to become a professor one day:)</p></div>
        </div>
    );
}

export default About;