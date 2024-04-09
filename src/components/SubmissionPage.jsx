import * as React from "react";

const IdeaBasicsStep = () => {
  return (
    <div className="idea-basics-step">
      <div className="step-number">1</div>
      <div className="step-title">Idea Basics</div>
    </div>
  );
};

const DemoLinksStep = () => {
  return (
    <div className="demo-links-step">
      <div className="step-number">2</div>
      <div className="step-title">Demo / Links</div>
    </div>
  );
};

const SecurityStep = () => {
  return (
    <div className="security-step">
      <div className="step-number">3</div>
      <div className="step-title">Security</div>
    </div>
  );
};

const TechnologyTag = ({ children }) => {
  return <div className="technology-tag">{children}</div>;
};

function SubmissionPage() {
  return (
    <>
      <div className="container w-full max-h-screen">
        <div className="background w-full max-h-screen">
          <div className="content w-full max-h-screen">
            <div className="columns w-full max-h-screen"> 
              <div className="column steps flex ">



                
                <div className="steps-container">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0591d0b65f5b1787f33399a10169dac2bca933dbfd698443a2cc2839fa6e5a62?apiKey=6e9447caa51a434aae5d6d6dea26fb3d&"
                    className="steps-image"
                    alt="Steps to submit your idea"
                  />
                  <div className="steps-list">
                    <IdeaBasicsStep />
                    <DemoLinksStep />
                    <SecurityStep />
                  </div>
                </div>
              </div>
              <div className="column form">
                <div className="form-container">
                  <div className="form-header">
                    <h1 className="form-title">Submit Your Idea</h1>
                  </div>
                  <form className="flex flex-col">
                    <div className="flex flex-col items-start w-full">

                    <label htmlFor="ideaTitle" className="form-label">
                      Idea Title
                    </label>
                    <input
                      type="text"
                      id="ideaTitle"
                      className="form-input"
                      placeholder="Title should be of 50 - 100 characters"
                      aria-label="Idea Title"
                    />
                    </div>
                    <div className="flex flex-col items-start">

                    <label htmlFor="ideaDescription" className="form-label">
                      Idea Description
                    </label>
                    <textarea
                      id="ideaDescription"
                      className="form-textarea"
                      placeholder="Describe your Idea in about 50 - 100 characters"
                      aria-label="Idea Description"
                    ></textarea>
                    </div>
                    


                    <div className="flex flex-col items-start">

                    <label htmlFor="technologyTags" className="form-label">
                      Technology Tags used
                    </label>
                    <input
                      type="text"
                      id="technologyTags"
                      className="form-input"
                      placeholder="Search here"
                      aria-label="Technology Tags used"
                    />
                    </div>
                    <div className="technology-tags">
                      <TechnologyTag>React JS</TechnologyTag>
                      <TechnologyTag>React JS</TechnologyTag>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
        .background {
          background-color: #c8c8c8;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .background {
            max-width: 100%;
          }
        }
        .content {
          display: flex;
        }
        @media (max-width: 991px) {
          .content {
            max-width: 100%;
          }
        }
        .columns {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .columns {
            flex-direction: column;
            gap: 0;
          }
        }
        .steps {
          width: 29%;
          margin-left: 0;
        }
        @media (max-width: 991px) {
          .steps {
            width: 100%;
          }
        }
        .steps-container {
          background-color: #000;
          color: #000;
          font-size: 22px;
          font-weight: 600;
          line-height: 120%;
          text-align: center;
          padding: 43px 0 80px;
        }
        @media (max-width: 991px) {
          .steps-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .steps-image {
          aspect-ratio: 2.5;
          object-fit: auto;
          width: 100%;
        }
        @media (max-width: 991px) {
          .steps-image {
            max-width: 100%;
          }
        }
        .steps-list {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: center;
          margin-top: 104px;
          max-width: 364px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .steps-list {
            margin-top: 40px;
          }
        }
        .idea-basics-step,
        .demo-links-step,
        .security-step {
          display: flex;
          gap: 20px;
          margin-top: 78px;
        }
        @media (max-width: 991px) {
          .idea-basics-step,
          .demo-links-step,
          .security-step {
            margin-top: 40px;
          }
        }
        .step-number {
          align-items: center;
          background-color: #d9d9d9;
          border-radius: 50%;
          font-family: Sora, sans-serif;
          height: 51px;
          justify-content: center;
          padding: 0 22px;
          stroke-width: 3px;
          white-space: nowrap;
          width: 51px;
        }
        @media (max-width: 991px) {
          .step-number {
            padding: 0 20px;
            white-space: initial;
          }
        }
        .step-title {
          align-items: center;
          background-color: #fff;
          border: 3px solid #f00;
          border-radius: 31px;
          flex-grow: 1;
          font-family: Sora, sans-serif;
          justify-content: center;
          padding: 17px 60px;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .step-title {
            padding: 0 20px;
          }
        }
        .form {
          width: 71%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .form {
            width: 100%;
          }
        }
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-weight: 600;
          line-height: 120%;
          margin-top: 81px;
          text-align: center;
        }
        @media (max-width: 991px) {
          .form-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .form-header {
          display: flex;
          flex-direction: column;
          margin-left: 33px;
        }
        @media (max-width: 991px) {
          .form-header {
            max-width: 100%;
          }
        }
        .form-title {
          align-self: end;
          background: linear-gradient(180deg, #f33cc0 13.43%, #4349ff 73.37%);
          background-clip: text;
          font: 60px Sora, sans-serif;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 5.7px rgba(0, 0, 0, 0.23);
        }
        @media (max-width: 991px) {
          .form-title {
            max-width: 100%;
            font-size: 40px;
          }
        }
        .form-label {
          color: #000;
          font: 43px Sora, sans-serif;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .form-label {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .form-input,
        .form-textarea {
          align-items: start;
          align-self: stretch;
          background-color: #fff;
          border-radius: 31px;
          color: #aeaeae;
          font: 22px Sora, sans-serif;
          margin-top: 31px;
          padding: 38px 32px;
        }
        @media (max-width: 991px) {
          .form-input,
          .form-textarea {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .form-textarea {
          padding-bottom: 171px;
        }
        @media (max-width: 991px) {
          .form-textarea {
            padding-bottom: 40px;
          }
        }
        .technology-tags {
          display: flex;
          gap: 20px;
          margin-top: 31px;
          max-width: 513px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .technology-tags {
            flex-wrap: wrap;
          }
        }
        .technology-tag {
          align-items: start;
          background-color: #31f500;
          border-radius: 31px;
          color: #000;
          font: 22px Sora, sans-serif;
          justify-content: center;
          padding: 23px 60px;
        }
        @media (max-width: 991px) {
          .technology-tag {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}



export default SubmissionPage;