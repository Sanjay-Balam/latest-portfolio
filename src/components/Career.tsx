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
                <h4>Full Stack Developer Intern</h4>
                <h5>ZenvInnovations</h5>
              </div>
              <h3>Nov 2023 – Jan 2024</h3>
            </div>
            <p>
              Designed and implemented over 30+ backend APIs using Node.js,
              Express, and MongoDB. Optimized complex database queries and
              indexing strategies, reducing API response times by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>VectorSoft</h5>
              </div>
              <h3>Feb 2024 – Present</h3>
            </div>
            <p>
              Architected healthcare applications leveraging AWS (MongoDB, EC2,
              Cognito, Route53). Deployed auth systems for 500+ users, engineered
              OCR workflows, and orchestrated CI/CD pipelines with Docker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
