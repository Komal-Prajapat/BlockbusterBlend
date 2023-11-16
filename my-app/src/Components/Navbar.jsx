import React from 'react';
import './Navbar.css'
function Navbar() {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo " href="#" >BlockbusterBlend</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'yellow'}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Movie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
