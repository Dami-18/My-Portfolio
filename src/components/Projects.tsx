import Slider from "react-slick";
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import '../styles/Projects.scss'

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,  // can change this settings as new projects are uploaded
    slidesToScroll: 1,
  };

    return ( 
    <div className="project" id="projects">
      <Slider {...settings}>
            <div className="box-1 box">
              <div className="proj-1"><p><a href="https://dami-18.github.io/Aut_2023_Physics/" target="_blank">Autumn 2023 Physics Sem Website</a></p></div>
              <div className="projtxt"><p>This website serves as a central hub for accessing study materials and resources tailored for the Physics semester during the first year at IIT Kharagpur. It contains drive links to well organized lecture notes, past year papers and books. A simple website to serve as an academic helper!</p></div>
              <div className="tech-stack"><p>Tech Stack: HTML, CSS</p></div>
              <div className="github"><a href="https://github.com/Dami-18/Aut_2023_Physics" target="_blank"><i className="fa-brands fa-github"></i></a></div>
            </div>
            <div className="box-2 box">
              <div className="proj-2"><p style={{fontWeight: "500"}}>GYFE (Open source project maintained by <a href='https://github.com/metakgp' target='_blank'>MetaKGP</a>)</p></div>
              <div className="projtxt"><p>Get Your Freaking Electives (GYFE) is a webapp for the students of IIT Kharagpur which simplifies the process of subject registration. It fetches data regarding available slots and elective subjects from their ERP student profile after providing credentials and provides a list of available electives.</p></div>
              <div className="tech-stack"><p>Tech Stack: React.js, TypeScript, SCSS, Flask</p></div>
              <div className="github"><a href="https://github.com/metakgp/gyfe" target="_blank"><i className="fa-brands fa-github"></i></a></div>
            </div>
      </Slider>
      </div>
     );
}
 
export default Projects;