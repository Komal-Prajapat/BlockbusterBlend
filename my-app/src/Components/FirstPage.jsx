import React from 'react';
import './Navbar.css'
function FirstPage() {
  const container = {
   
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
      padding: '20px',
    };

  const heading = {
    color: 'yellow',
  };

  const buttonStyle = {
    backgroundColor: 'yellow',
    fontSize: '1.5em', // Adjust the font size as needed
    padding: '10px 20px', // Adjust the padding as needed
  };

  return (
    <div>
      <>
      <div className="con">
        <div className="container " style={container} >
          <h1 style={heading}>FILMLANE </h1>
          <h1>
            Unlimited <span style={heading}>Movie</span>, TV Shows, & More.
          </h1>

          <br/>
          <button className='btn btn-lg' style={buttonStyle}>
            Watch now
          </button>
        </div>
        </div>
      </>
    </div>
  );
}

export default FirstPage;
