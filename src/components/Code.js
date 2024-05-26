import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/webpack-resolver";

// Import worker files
import "ace-builds/src-noconflict/worker-javascript";

const Code = ({ type }) => {
  const codeMap = {
    generic: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('Application has started.')
} 
  `,
    debug: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('This is an debug message.')
} 
`,
    info: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('This is an info message.')
} 
`,
    warn: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('This is an warn message.')
} 
`,
    error: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('This is an error message.')
} 
`,
    fatal: `const LogSwift = require('log-swift');
const log = new LogSwift();


function logger() {
  log.generic('This is an fatal message.')
} 
`,
  };

  const codeToDisplay = codeMap[type] || codeMap.generic;

  return (
    <div className="code-main">
      <AceEditor
        mode="javascript"
        theme="terminal"
        name="code-editor"
        value={codeToDisplay}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          readOnly: true,
          workerPath: "ace-builds/src-noconflict/", // Set worker path
        }}
        width="100%"
        height="150px"
        fontSize={12}
      />
    </div>
  );
};

export default Code;
