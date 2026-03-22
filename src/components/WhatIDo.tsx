import "./styles/WhatIDo.css";
const whatIDoCards = [
  {
    title: "Full Stack Development",
    subtitle: "Web Application Development",
    description:
      "Build complete web applications with frontend, backend, and database integration.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Backend Development",
    subtitle: "APIs and System Design",
    description:
      "Develop secure and scalable REST APIs with authentication and database handling.",
    tools: ["Python", "Flask", "Node.js", "JWT"],
  },
  {
    title: "AI and Machine Learning",
    subtitle: "Intelligent Systems",
    description:
      "Create ML models for prediction, classification, and automation tasks.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Problem Solving",
    subtitle: "DSA and Logic Building",
    description:
      "Solve complex problems using optimized algorithms and data structures.",
    tools: ["Java", "Python", "LeetCode", "HackerRank"],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {whatIDoCards.map((card) => (
            <div className="what-content" key={card.title}>
              <div className="what-content-in">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
                <h5>Skillset and tools</h5>
                <div className="what-content-flex">
                  {card.tools.map((tool) => (
                    <div className="what-tags" key={tool}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
