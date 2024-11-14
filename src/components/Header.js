import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <img src={require('../images/logo.png')} alt="ByteRun" />
                <h1>Byte<span>Run</span></h1>
            </div>
        </div>

    )
}

export default Header