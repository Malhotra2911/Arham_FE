import React, { useState } from 'react'
import '../css/PreferentialIssue.css'
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf.png'

const PreferentialIssue = () => {

  const PCSComplianceCertificateData = [
    {
      link: "/assets/preferentialIssue/PCS_Certificate.pdf",
      image: pdf,
      name: "PCS Compliance Certificate"
    },
    {
      link: "/assets/preferentialIssue/Revised PCS Compliance Certificate.pdf",
      image: pdf,
      name: "Revised PCS Compliance Certificate"
    },
    {
      link: "/assets/preferentialIssue/Revised PCS Pricing Certificate.pdf",
      image: pdf,
      name: "Revised PCS Pricing Certificate"
    },
  ]

  const valuationReportData = [
    {
      link: "/assets/preferentialIssue/Valuation_Report.pdf",
      image: pdf,
      name: "Valuation Report"
    },
    {
      link: "/assets/preferentialIssue/Revised Valuation Report.pdf",
      image: pdf,
      name: "Revised Valuation Report"
    },
  ]

  const corrigendumAuraData = [
    {
      link: "/assets/preferentialIssue/Corrigendum_Notice.pdf",
      image: pdf,
      name: "Corrigendum Notice"
    },
  ]

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  }

  const filtered = (dataArray) => {
    return dataArray.filter(data => data.name.toLowerCase().includes(searchQuery));
  }

  return (
    <div>
      <section className='preferentialIssuePart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Preferential Issue</strong></h1>
      </section>

      <section className='container preferentialIssuePart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 policiesCompliancePart2_1 p-3 d-none d-md-block'>
            <h3 className='pb-3'>Investor Relation</h3>
            <div className='investorRelationLink mb-3'>
              <Link to="/boardOfDirector" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Board Of Directors</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/committeesOfTheBoard" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Committees Of The Board</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/annualReport" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Annual Report</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/shareholderInformation" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Shareholder's Information</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/policiesCompliance" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Policies & Compliances</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/corporateAnnouncements" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Corporate Announcements</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/intimationOutcomeOfBoardMeeting" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Intimation & Outcome Of Board Meeting</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/intimationToTheStockExchange" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Intimation To The Stock Exchange</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/nominationForm" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Nomination Form</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/prospectus" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Prospectus</i></Link>
            </div>
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
              <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Preferential Issue</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Preferential Issue" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <h2 className='mt-2 p-1'><strong>PCS Certificate</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(PCSComplianceCertificateData).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h2 className='mt-2 p-1'><strong>Valuation Report</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(valuationReportData).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h2 className='mt-2 p-1'><strong>Corrigendum to Notice</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(corrigendumAuraData).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PreferentialIssue
