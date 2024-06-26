import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div className="intro" id="home">
            <h1>
            Hi! I am Damiya Gondha{" "}
            <ReactTyped strings={["<br/><span class='subtitle'><i>Learner. Explorer. Professional overthinker.</i><br/>Computer science is an ocean I dive deep into!</span>"]} typeSpeed={60}/>
            </h1>
        </div>
    );
}
 
export default Home;