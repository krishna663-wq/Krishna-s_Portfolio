import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>GLA University, Mathura</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Building a strong foundation in programming, data structures, AI,
              and software development through academics and practical
              implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self Projects and Practical Learning</h4>
                <h5>Personal Development</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Developed real-world projects in AI, full stack development, and
              backend systems to gain hands-on industry-level experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
