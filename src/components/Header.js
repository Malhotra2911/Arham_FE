import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-new.png'
import '../css/Header.css'
import starshineLogo from '../assets/Starshine Logo png.png'

const Header = () => {

  const closeNavbar = () => {
  const navbarCollapse = document.getElementById("navbarNavAltMarkup");
  if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#f8f8f8" }}>
        <Link className="navbar-brand mx-4" to="/"><img className='logo' src={logo} alt='...' style={ {height: "6vh", width: "100%"} } /></Link>
        <button className="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
            <li className='nav-item position-relative starshine-logo-container'>
              <Link className='nav-link active' to="https://starshine.co.in" target='_blank'><img src={starshineLogo} alt="..." className='starshineLogo' /></Link>
              <Link to="https://starshine.co.in" className="shop-now-btn" onClick={closeNavbar} target='_blank'>Shop Now</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link active" to="/" onClick={closeNavbar}><strong>Home</strong></Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link active" to="/about" onClick={closeNavbar}><strong>About</strong></Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link active" to="/newsBlogs" onClick={closeNavbar}><strong>News & Blogs</strong></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Investor Relation</strong>
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/boardOfDirector" onClick={closeNavbar}><strong>Board Of Directors</strong></Link></li>
                <li><Link className="dropdown-item" to="/committeesOfTheBoard" onClick={closeNavbar}><strong>Committees Of The Board</strong></Link></li>
                <li><Link className="dropdown-item" to="/annualReport" onClick={closeNavbar}><strong>Annual Report</strong></Link></li>
                <li><Link className="dropdown-item" to="/shareholderInformation" onClick={closeNavbar}><strong>Shareholder's Information</strong></Link></li>
                <li><Link className="dropdown-item" to="/policiesCompliance" onClick={closeNavbar}><strong>Policies & Compliance</strong></Link></li>
                <li><Link className="dropdown-item" to="/corporateAnnouncements" onClick={closeNavbar}><strong>Corporate Announcements</strong></Link></li>
                <li><Link className="dropdown-item" to="/intimationOutcomeOfBoardMeeting" onClick={closeNavbar}><strong>Intimation & Outcome Of Board Meeting</strong></Link></li>
                <li><Link className="dropdown-item" to="/intimationToTheStockExchange" onClick={closeNavbar}><strong>Intimation To The Stock Exchange</strong></Link></li>
                <li><Link className="dropdown-item" to="/nominationForm" onClick={closeNavbar}><strong>Nomination Form</strong></Link></li>
                <li><Link className="dropdown-item" to="/prospectus" onClick={closeNavbar}><strong>Prospectus</strong></Link></li>
                <li><Link className="dropdown-item" to="/preferentialIssue" onClick={closeNavbar}><strong>Preferential Issue</strong></Link></li>
                <li><Link className="dropdown-item" to="/contact" onClick={closeNavbar}><strong>Contact Information</strong></Link></li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className="nav-link active" to="/awardsRecognition" onClick={closeNavbar}><strong>Awards & Recognition</strong></Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link active" to="/ewaste" onClick={closeNavbar}><strong>E-Waste</strong></Link>
            </li>
            {/* <li className='nav-item'>
              <Link className="nav-link active" to="/" onClick={closeNavbar}><strong>Careers</strong></Link>
            </li> */}
            <li className='nav-item'>
              <Link className="nav-link active" to="/contact" onClick={closeNavbar}><strong>Contact</strong></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default Header
