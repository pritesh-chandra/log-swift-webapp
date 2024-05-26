import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header-main'>
            <div className='header-left-content'>
                <h1><a href='/log-swift-webapp'>LogSwift</a></h1>
            </div>
            <div className='header-right-content'>
                <ul>
                    <li>
                       <a href='/log-swift-webapp'>Home</a> 
                    </li>
                    <li>
                       <a href='https://github.com/pritesh-chandra/log-swift/blob/main/README.md' target="_blank" rel="noopener noreferrer">Docs</a> 
                    </li>
                    <li>
                       <a href='https://github.com/pritesh-chandra/log-swift/tree/main' target="_blank" rel="noopener noreferrer">GitHub</a> 
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header