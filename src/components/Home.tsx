import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div className="intro">
            <h1>
            Hi!{" "}
            <ReactTyped strings={["I am Damiya Gondha<br/><span class='subtitle'>Learner. Explorer. Professional overthinker.<br/>Computer science is an ocean I dive too deep into!</span>"]} typeSpeed={90}/>
            </h1>
        </div>
    );
}
 
export default Home;