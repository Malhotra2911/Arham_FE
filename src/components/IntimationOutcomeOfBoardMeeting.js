import React, { useState } from 'react'
import '../css/IntimationOutcomeOfBoardMeeting.css'
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf.png'

const IntimationOutcomeOfBoardMeeting = () => {

  const Nov2024 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Nov2024/Outcome of Board Meeting Nov 2024.pdf",
      image: pdf,
      name: "Outcome of the meeting",
      date: ""
    }
  ]

  const Sep2024 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Sep2024/Outcome of Board Meeting Sept 2024.pdf",
      image: pdf,
      name: "Outcome of the meeting",
      date: ""
    }
  ]

  const May2024 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/May2024/Outcome of Board Meeting May 2024.pdf",
      image: pdf,
      name: "Outcome of the meeting",
      date: ""
    },
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/May2024/Financial Results May 2024.pdf",
      image: pdf,
      name: "Financial Results",
      date: ""
    },
  ]

  const Mar2024 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Mar2024/Intimation of Board Meeting Dated MARCH 2024.pdf",
      image: pdf,
      name: "Intimation of Board Meeting",
      date: "14/03/2024"
    },
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Mar2024/Outcome of Board Meeting Dated MARCH 2024.pdf",
      image: pdf,
      name: "Outcome of Board Meeting",
      date: "14/03/2024"
    },
  ]

  const Dec2023 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Dec2023/Intimation of Board Meeting DECEMBER 2023.pdf",
      image: pdf,
      name: "Intimation of Board Meeting",
      date: "27/12/2023"
    },
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Dec2023/Outcome of Board Meeting DECEMBER 2023.pdf",
      image: pdf,
      name: "Outcome of Board Meeting",
      date: "27/12/2023"
    },
  ]

  const Nov2023 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Nov2023/Intimation of Board Meeting NOVEMBER 2023.pdf",
      image: pdf,
      name: "Intimation of Board Meeting",
      date: "10/11/2023"
    },
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/Nov2023/Outcome of Board Meeting NOVEMBER 2023.pdf",
      image: pdf,
      name: "Outcome of Board Meeting",
      date: "10/11/2023"
    },
  ]

  const May2023 = [
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/May2023/Intimation of Board Meeting May 2023.pdf",
      image: pdf,
      name: "Intimation of Board Meeting",
      date: "25/05/2023"
    },
    {
      link: "/assets/intimationOutcomeOfBoardMeeting/May2023/Outcome of Board Meeting  MAY 2023.pdf",
      image: pdf,
      name: "Outcome of Board Meeting",
      date: "25/05/2023"
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
      <section className='intimationOutcomeOfBoardMeetingPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Intimation & Outcome of Board Meeting</strong></h1>
      </section>

      <section className='container intimationOutcomeOfBoardMeetingPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 intimationOutcomeOfBoardMeetingPart2_1 p-3 d-none d-md-block'>
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
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
            <div className='investorRelationLink mb-3'>
              <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Intimation & Outcome of Board Meeting</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Intimation & Outcome of Board Meeting" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <h4 className='mt-2 p-1'><strong>Nov 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(Nov2024).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>Sept 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(Sep2024).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>May 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(May2024).map((data,index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>March 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(Mar2024).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>Dec 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(Dec2023).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>Nov 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(Nov2023).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
                      </div>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <h4 className='mt-2 p-1'><strong>May 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(May2023).map((data, index) => {
                return (
                  <div className='col-6 col-md-4 p-4' key={index}>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.date ? (<p className='text-muted'>Dated {data.date}</p>) : ""}
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

export default IntimationOutcomeOfBoardMeeting
