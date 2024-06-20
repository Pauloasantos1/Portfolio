import { SpacemanCanvas } from ".";


const Hero = ({scrollContainer}) => {
    return (
        <div id="hero" className="parallax">
            <h1> Hero Section</h1>
            <img className="parallax__space"src="src/assets/3d/parallax/space.svg"/>
            <div className="spaceman-wrapper">
            <SpacemanCanvas scrollContainer={scrollContainer} />
            </div>
            <p> Welcome to my portfolio. Scroll down to see more about my experience, technologies, projects, and contact information.</p> 

        </div>
    );
};

export default Hero;