import React from 'react'

const LogLevelDisplay = ({ onLogLevelChange }) => {
  const handleClick = (event) => {
    onLogLevelChange(event.target.value);
  };

  return (
    <div className='log-level-main'>
        <div className='generic'>
            <button value="generic" onClick={handleClick}>Generic</button>
        </div>
        <div className='debug'>
            <button value="debug" onClick={handleClick}>Debug</button>
        </div>
        <div className='info'>
            <button value="info" onClick={handleClick}>Info</button>
        </div>
        <div className='warn'>
            <button value="warn" onClick={handleClick}>Warn</button>
        </div>
        <div className='error'>
            <button value="error" onClick={handleClick}>Error</button>
        </div>
        <div className='fatal'>
            <button value="fatal" onClick={handleClick}>Fatal</button>
        </div>
    </div>
  )
}

export default LogLevelDisplay