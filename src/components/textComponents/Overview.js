import React from "react";
import VideoSidebar from "../Video/VideoSidebar";

const Overview = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <div className="textComp-section">
          <h1 className="center">Overview of the Tool</h1>

          <div className="card">
            <div className="card-body">
              <p>
                Boozang is a tool that runs directly in your browser, that allows you to test the application just like a user would. 
                It differs from common test automation frameworks by being completely code-less. 
                </p>
                <p>
                Boozang instead uses natural-language element selectors, that
                has the advantage of being extremely stable to code changes. 
                They allow you to differentiate element based on the what the user sees,
                not the underlying implementation details of your application.
              </p>
              Here are the advantages of the Boozang approach:
              <ul className="advantages-list">
                <li>
                  Tests can be created thirty (x30) times faster compared to coding tests
                </li>
                <li>Non-programmers can do test automation</li>
                <li>Tests are ultra-stable to changes to your application</li>
                <li>AI can be used to automatically repair tests that are broken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <VideoSidebar
          src="https://www.youtube.com/embed/u7HRbyUAFDg"
          height="230"
          width="100%"
          title="getting-started"
        />
        <VideoSidebar
          src="https://www.youtube.com/embed/POqOQ-hQuTk"
          height="230"
          width="100%"
          title="getting-started"
        />
      </div>

    </div>
  );
};
export default Overview;
