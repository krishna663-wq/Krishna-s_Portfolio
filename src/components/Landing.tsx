import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KRISHNA GOPAL
              <br />
              <span>SHARMA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Developer</h3>
            <h2 className="landing-info-h2">
              <span className="landing-h2-1">Full Stack</span>
              <span className="landing-h2-2">AI/ML</span>
            </h2>
            <h2 className="landing-info-h2">
              <span className="landing-h2-info">Python</span>
              <span className="landing-h2-info-1">Enthusiast</span>
            </h2>
            <div className="landing-taglines">
              <p>Building scalable software and intelligent systems.</p>
              <p>
                Passionate about AI, backend development, and real-world
                problem solving.
              </p>
              <p>Turning ideas into impactful digital products.</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;