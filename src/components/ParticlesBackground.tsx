import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";

const ParticlesBackground = () => {
	return (
		<Particles
			params={particlesConfig}
		/>
	);
}

export default ParticlesBackground;