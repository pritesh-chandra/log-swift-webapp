import React from "react";

const TitleDesc = () => {
  return (
    <div className="title-desc-main">
      <h3>
        <span><a href="https://www.npmjs.com/package/log-swift" target="_blank" rel="noopener noreferrer">LogSwift</a></span> is a simple and customizable logger for{" "}
        <span><a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a></span> applications that <span>logs</span> messages to the
        console with ,<span>timestamp</span>, <span>process ID</span>, and{" "}
        <span>location information</span> (file, line number, and function
        name). It supports different <span>log levels</span> and{" "}
        <span>colorized output</span>.
      </h3>
    </div>
  );
};

export default TitleDesc;
