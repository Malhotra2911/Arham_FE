import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'


const Footer = () => {
  return (
    <div className='container-fluid' align="center" style={{ backgroundColor: "#f8f8f8" }}>
      <div className='container p-1'>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <div className='footer-left'>
            <span className='p-3'>
              <Link to="https://www.facebook.com/share/1CLAJfjbwK/?mibextid=wwXIfr" target='_blank'><i className="bi bi-facebook footerIcon"></i></Link>
            </span>
            <span className='p-3'>
              <Link to="https://www.instagram.com/starshine.co.in/" target='_blank'><i className="bi bi-instagram footerIcon"></i></Link>
            </span>
            <span className='p-3'>
              <Link to="https://in.linkedin.com/company/arham-technologies-pvt-ltd" target='_blank'><i className="bi bi-linkedin footerIcon"></i></Link>
            </span>
            <span className='p-3'>
              <Link to="https://www.youtube.com/@arhamtechnologies9474" target='_blank'><i className="bi bi-youtube footerIcon"></i></Link>
            </span>
            <span className='p-3'>
              <Link to="https://x.com/arhamtechltd?s=21" target='_blank'><i className="bi bi-twitter footerIcon"></i></Link>
            </span>
          </div>
          <div className='footer-right'>
            <span className='p-3'><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></span>
            <span className='p-3'><Link to="/newsBlogs" style={{ textDecoration: 'none', color: 'black' }}>News & Blogs</Link></span>
            <span className='p-3'><Link to="/investorRelation" style={{ textDecoration: 'none', color: 'black' }}>Investor Relation</Link></span>
            <span className='p-3'><Link to="/awardsRecognition" style={{ textDecoration: 'none', color: 'black' }}>Awards & Recognition</Link></span>
            <span className='p-3'><Link to="/ewaste" style={{ textDecoration: 'none', color: 'black' }}>E-Waste</Link></span>
            <span className='p-3'><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></span>
          </div>
        </div>
        <hr />
        <p className='footerText'>Copyright © 2025 Arham Technologies Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
