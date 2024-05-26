import React from "react";

const Console = ({ type }) => {
  const colorMap = {
    generic: "white",
    debug: "blue",
    info: "green",
    warn: "yellow",
    error: "red",
    fatal: "magenta"
  };

  const lines = {
    generic: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [LOG]",
      "Message  : Application has started.",
      "Location : example/logger-example.js: 6 (logger)"
    ],
    debug: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [DEBUG]",
      "Message  : This is a debug message.",
      "Location : example/logger-example.js: 6 (logger)"
    ],
    info: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [INFO]",
      "Message  : This is an info message.",
      "Location : example/logger-example.js: 6 (logger)"
    ],
    warn: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [WARN]",
      "Message  : This is a warn message.",
      "Location : example/logger-example.js: 6 (logger)"
    ],
    error: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [ERROR]",
      "Message  : This is an error message.",
      "Location : example/logger-example.js: 6 (logger)"
    ],
    fatal: [
      "[05/26/2024, 12:47:00 GMT+5:30] [PID:28520] [FATAL]",
      "Message  : This is a fatal message.",
      "Location : example/logger-example.js: 6 (logger)"
    ]
  };

  const selectedLines = lines[type] || lines.generic;
  const color = colorMap[type] || colorMap.generic;

  return (
    <div className="terminal">
      {selectedLines.map((line, index) => (
        <div key={index} style={{ color: color }}>
          <span style={{ color: 'white' }}>{'> '}</span>
          <input
            type='text'
            value={line}
            readOnly
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              outline: 'none',
              width: 'calc(100% - 20px)',
              fontFamily: 'monospace',
              fontSize: '12px'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Console;
