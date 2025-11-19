import React, { useState } from 'react'
import '../css/EarningsCall.css'
import { Link } from 'react-router-dom'
import mp3 from '../assets/mp3.png'
import pdf from '../assets/pdf.png'

const EarningsCall = () => {

  const earningsCallData = [
    {
      link: "/assets/earningsCall/10038185.mp3",
      image: mp3,
      name: "H1FY26 Earnings Call"
    },
    {
      link: "/assets/earningsCall/ArhamTech-Nov17-2025.pdf",
      image: pdf,
      name: "H1FY26 Transcript"
    }
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
      <section className='earningsCallPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Earnings Call</strong></h1>
      </section>

      <section className='container earningsCallPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 earningsCallPart2_1 p-3 d-none d-md-block'>
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
              <Link to="/financials" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Financials</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/shareWarrants" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Share Warrants</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
                <Link to="/pressRelease" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Press Release</i></Link>
            </div>
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
                <Link to="/earningsCall" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Earnings Call</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
                <Link to="/investorPresentation" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Investor Presentation</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Earnings Call</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Earnings Call" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <h4 className='mt-2 p-1'><strong>17 Nov. 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(earningsCallData).map((data, index) => {
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

export default EarningsCall