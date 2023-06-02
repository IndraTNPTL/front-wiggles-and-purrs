import aboutImg from "../assets/pug.jpeg";
// import linkedinLogo from "../Assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";

// import { useEffect } from "react";

// IMPORT Link
import { Link } from "react-router-dom";

function About() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <div className="page-container">
      <div className="list-content">
        <div className="container">
          <div className="about-description">
            <div className="about-img">
              <img src={aboutImg} className="about-img" alt="About image" />
            </div>
            <div className="about-text">
              <h2 className="about-subtitle">About Wiggles & Purrs</h2>
              <p>
                <b>Welcome to wiggles and purrs!</b>At Wiggles and Purrs, we
                believe that every pet deserves a loving home. Our mission is to
                connect adorable pets with caring individuals or families,
                creating lifelong companionship and happiness. We understand the
                joy that comes from the wagging tails and purring cuddles, and
                we are here to make the adoption process as seamless and
                rewarding as possible.
                <br /> <br /> Thank you for considering Wiggles and Purrs as
                your adoption partner. By choosing to adopt a pet, you are
                opening your heart and home to a loyal companion who will bring
                endless joy and unconditional love. Begin your journey today by
                browsing our available pets or contacting our team for more
                information. Together, let's give every pet the chance to
                experience a life filled with wiggles and purrs!
                <br /> <br />
              </p>
              {/* <div className="social-share">
                <h3>Join us on Linkedin!</h3>
                <div className="social-infos"> */}
              {/* <div className="social-details">
                    <h4>Indra ➡️</h4>
                    <Link
                      to="https://www.linkedin.com/in/indratinotpatole/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo linkedin-img"
                        src={linkedinLogo}
                        alt="linkedin link Indra"
                      />
                    </Link>
                  </div> */}
              {/* <div className="social-details">
                    <h4>Crystine ➡️</h4>
                    <Link
                      to="https://www.linkedin.com/in/yin-yee-koh-b1874349/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo linkedin-img"
                        src={linkedinLogo}
                        alt="linkedin link Crystine"
                      />
                    </Link>
                  </div> */}
              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
