import React from "react";
import SS from '../assets/ss1.png';

const TitleDesc = () => {
  return (
    <div className="title-desc-main">
      <h3>
        <span>
          <a href="https://www.npmjs.com/package/log-swift" target="_blank" rel="noopener noreferrer">LogSwift</a>
        </span> 
        &nbsp;is a simple and customizable logger for 
        <span>
          <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">&nbsp;Node.js&nbsp;</a>
        </span> 
        applications that
        <span className="hover-span">&nbsp;logs&nbsp;
          <img src={SS} alt="Log Image" className="hover-image" />
        </span> 
        messages to the console with 
        <span className="hover-span">&nbsp;timestamp
          <img src={SS} alt="Timestamp Image" className="hover-image" />
        </span>, 
        <span className="hover-span">&nbsp;process ID
          <img src={SS} alt="Process ID Image" className="hover-image" />
        </span>, and 
        <span className="hover-span">&nbsp;location information&nbsp;
          <img src={SS} alt="Location Information Image" className="hover-image" />
        </span> 
        (file, line number, and function name). It supports different 
        <span className="hover-span">&nbsp;log levels
          <img src={SS} alt="Log Levels Image" className="hover-image" />
        </span> and 
        <span className="hover-span">&nbsp;colorized output
          <img src={SS} alt="Colorized Output Image" className="hover-image" />
        </span>.
      </h3>
    </div>
  );
};

export default TitleDesc;
