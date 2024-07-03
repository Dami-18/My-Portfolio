import myImg from '../assets/myphoto.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="img-container"><img src={myImg}></img></div>
            <div className="about-text"><p id='about-me'>I am Damiya Gondha, a sophomore pursuing computer science and engineering from IIT Kharagpur. 
                <i>"Computer Science is an ocean I dive deep into!"</i> Yes, a true nerd. I like to get myself immersed in the complexity of data structures, algorithms and software development.
                I am also interested in robotics and currently I am a part of software team at <a href='http://www.agv.iitkgp.ac.in/' target='_blank'>AGV</a>, IIT Kharagpur.
                I started exploring open source by contributing to open source organization, <a href='https://github.com/metakgp' target='_blank'>MetaKGP</a>. Currently, I am a core team member at <a href='https://kossiitkgp.org/' target='_blank'>Kharagpur Open Source Society</a>, a bunch of cool open source enthusiasts. Now, I find joy in contributing to projects that people use for various tasks. Apart from these, I love reading novels and playing flute.
            <br/>I strongly believe that interests may not always imply our expertise in something, rather, it is something which compels us to learn and explore more. And so I keep learning:) 
            </p></div>
        </div>
    );
}

export default About;
