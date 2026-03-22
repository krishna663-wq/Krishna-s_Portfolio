import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:krishnagopal1270@gmail.com" data-cursor="disable">
                krishnagopal1270@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech CSE (2022-2026), GLA University, Mathura</p>
            <h4>Location</h4>
            <p>India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/krishna663-wq"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub Profile"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-gopal-sharma-94851425b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn Profile"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/krishna-899/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Leetcode Profile"
            >
              Leetcode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Krishna Gopal Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
