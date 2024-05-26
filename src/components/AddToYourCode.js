import React, { useState } from 'react';

const AddToYourCode = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess('Copied to clipboard! Log Like a Pro.');
    setTimeout(() => setCopySuccess(''), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className='add-to-main'>
        <div className='npm-install-desc'>
            <p onClick={() => handleCopy('npm i log-swift')}><span>$</span> npm i log-swift</p>
            <span>or</span>
            <p onClick={() => handleCopy('yarn add log-swift')}><span>$</span> yarn add log-swift</p>
            {copySuccess && <div className="alert">{copySuccess}</div>}
        </div>
    </div>
  )
}

export default AddToYourCode;