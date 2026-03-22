import { MdArrowOutward, MdVerified } from "react-icons/md";
import "./styles/Certifications.css";
import type { CSSProperties } from "react";

type CertificationAccent =
  | "blue"
  | "violet"
  | "amber"
  | "emerald"
  | "rose"
  | "cyan";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
  accent: CertificationAccent;
}

const certifications: Certification[] = [
  {
    title: "Data Science Intern",
    issuer: "Njuma Consulting LLC",
    issueDate: "Jun 2023 - Aug 2023",
    credentialUrl:
      "https://drive.google.com/file/d/1OfVriMqkCJrEVQt5AIx5JILGUthkWcmX/view?usp=sharing",
    skills: ["Python", "NLP", "Machine Learning", "Data Analysis"],
    accent: "blue",
  },
  {
    title: "Gen AI: Beyond the Chatbot",
    issuer: "Coursera",
    issueDate: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1wb_Fe_9U3goWv8MdhiYPWGpeynSpWzoX/view?usp=sharing",
    skills: ["Generative AI", "NLP", "LLM", "AI Tools"],
    accent: "violet",
  },
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Udemy",
    issueDate: "2025",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-042347ea-8963-4de6-a45e-9671e872c462/",
    skills: ["AWS", "Cloud Computing", "IAM", "EC2", "S3"],
    accent: "amber",
  },
  {
    title: "MySQL Certification",
    issuer: "HackerRank",
    issueDate: "2025",
    credentialUrl: "https://www.hackerrank.com/certificates/dc03178532c0",
    skills: ["MySQL", "SQL Queries", "Database Management"],
    accent: "emerald",
  },
  {
    title: "Python Certification",
    issuer: "IBM (Cognitive Class)",
    issueDate: "2024",
    credentialUrl:
      "https://www.linkedin.com/posts/krishna-gopal-sharma-94851425b_ive-obtained-a-new-certification-by-ibm-activity-7042408032370069504-umU4",
    skills: ["Python", "Problem Solving", "Data Structures"],
    accent: "rose",
  },
  {
    title: "Micro Experience Program - Operations Analyst",
    issuer: "Forage",
    issueDate: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/16mUmMR4DM6X-Fu82KEeRHo1j-Y1CV9Z7/view?usp=sharing",
    skills: ["Data Analysis", "Business Operations", "Excel"],
    accent: "cyan",
  },
];

const getCertificationStyle = (accent: CertificationAccent): CSSProperties => ({
  ["--certAccent" as string]: `var(--cert-${accent})`,
});

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        {certifications.length === 0 ? (
          <div className="certification-empty">
            <h4>Certification details will be added here</h4>
            <p>
              Share your certification title, issuer, issue date, and
              credential link, and I will add them in this section.
            </p>
          </div>
        ) : (
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <article
                className="certification-card"
                style={getCertificationStyle(cert.accent)}
                key={`${cert.title}-${cert.issuer}`}
              >
                <p className="certification-label">
                  <MdVerified /> Verified Certification
                </p>
                <h3>{cert.title}</h3>
                <p className="certification-meta">
                  {cert.issuer} • {cert.issueDate}
                </p>
                <div className="certification-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-link"
                    data-cursor="disable"
                  >
                    View Credential <MdArrowOutward />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
