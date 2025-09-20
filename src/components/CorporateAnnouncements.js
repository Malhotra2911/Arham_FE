import React, { useState } from 'react'
import '../css/CorporateAnnouncements.css'
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf.png'

const CorporateAnnouncements = () => {

  const announcementData = [
    {
      link: "/assets/corporateAnnouncements/Announcements/EGM-2.pdf",
      image: pdf,
      name: "EGM",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/Announcements/EGM.pdf",
      image: pdf,
      name: "EGM",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/Announcements/General Meeting.pdf",
      image: pdf,
      name: "General Meeting",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/Announcements/Other Annoncements.pdf",
      image: pdf,
      name: "Other Announcements",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/Announcements/Intimation of Record Date.pdf",
      image: pdf,
      name: "Intimation of Record Date",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/Announcements/Intimation of In-Principal.pdf",
      image: pdf,
      name: "Intimation of In-principal",
      date: ""
    }
  ]

  const boardMeetingData = [
    {
      link: "/assets/corporateAnnouncements/boardMeeting/Notice of Board Meeting.pdf",
      image: pdf,
      name: "Notice of Board Meeting",
      date: "25/05/2023"
    },
    {
      link: "/assets/corporateAnnouncements/boardMeeting/Notice of NRC Commitee.pdf",
      image: pdf,
      name: "Notice of NRC Committee",
      date: "25/05/2023"
    },
    {
      link: "/assets/corporateAnnouncements/boardMeeting/Notice of Audit Committee.pdf",
      image: pdf,
      name: "Notice of Audit Committee",
      date: "25/05/2023"
    },
  ]

  const financialResultData = [
    {
      link: "/assets/corporateAnnouncements/financialResult/financials (consolidated) sept-2024.pdf",
      image: pdf,
      name: "Financials (Consolidated)",
      date: "Sept 2024"
    },
    {
      link: "/assets/corporateAnnouncements/financialResult/financial (standalone) sept-2024.pdf",
      image: pdf,
      name: "Financials (Standalone)",
      date: "Sept 2024"
    },
    {
      link: "/assets/corporateAnnouncements/financialResult/Financial Result-31-03-2024.pdf",
      image: pdf,
      name: "Financial Result",
      date: "31/03/2024"
    },
    {
      link: "/assets/corporateAnnouncements/financialResult/Financial Result Sep_2023.pdf",
      image: pdf,
      name: "Financial Result",
      date: "Sept 2023"
    },
    {
      link: "/assets/corporateAnnouncements/financialResult/Financial Result-31-03-2023.pdf",
      image: pdf,
      name: "Financial Result",
      date: "31/03/2023"
    },
  ]

  const generalAnnouncement27Mar2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/27th March 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/27th March 2025/Regulation 30.pdf",
      image: pdf,
      name: "Regulation 30",
      date: ""
    }
  ]

  const generalAnnouncement26Mar2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/26th March 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/26th March 2025/General Corporate Annoucement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement21Mar2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/21th March 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/21th March 2025/Regulation 30.pdf",
      image: pdf,
      name: "Regulation 30",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/21th March 2025/Capital Subsidy.pdf",
      image: pdf,
      name: "Capital Subsidy",
      date: ""
    },
  ]

  const generalAnnouncement10Mar2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/10th March 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/10th March 2025/Regulation 30.pdf",
      image: pdf,
      name: "Regulation 30",
      date: ""
    }
  ]

  const generalAnnouncement18Feb2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/18th February 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/18th February 2025/Business Update.pdf",
      image: pdf,
      name: "Business Update",
      date: ""
    }
  ]

  const generalAnnouncement14Feb2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/14th February 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/14th February 2025/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement13Feb2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/13th February 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/13th February 2025/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement10Feb2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/10th February 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/10th February 2025/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement03Feb2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/03rd February 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/03rd February 2025/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement17Jan2025Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/17th January 2025/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/17th January 2025/General Announcement.pdf",
      image: pdf,
      name: "General Announcement",
      date: ""
    }
  ]

  const generalAnnouncement21Dec2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/21st December 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/21st December 2024/Business Update.pdf",
      image: pdf,
      name: "Business Update",
      date: ""
    }
  ]

  const generalAnnouncement26Nov2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/26th November 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/26th November 2024/Regulation 30.pdf",
      image: pdf,
      name: "Regulation 30",
      date: ""
    }
  ]

  const generalAnnouncement02Aug2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/02nd August 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/02nd August 2024/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement08May2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/08th May 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/08th May 2024/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/08th May 2024/LED TV VENDOR REGISTRATION.pdf",
      image: pdf,
      name: "LED Tv Vendor Registration",
      date: ""
    },
  ]

  const generalAnnouncement05Mar2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/05th March 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/05th March 2024/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/05th March 2024/Service Agreement.pdf",
      image: pdf,
      name: "Service Agreement",
      date: ""
    }
  ]

  const generalAnnouncement22Feb2024Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/22nd February 2024/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/22nd February 2024/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement20Dec2023Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/20th December 2023/NSE Acknowledgement.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/20th December 2023/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/20th December 2023/MOU with Magure.pdf",
      image: pdf,
      name: "MoU with Magure",
      date: ""
    }
  ]

  const generalAnnouncement15Nov2023Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/15th November 2023/NSE Acknowledgment.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/15th November 2023/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement12Oct2023Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/12th October 2023/NSE Acknowledgment.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/12th October 2023/GeneralCorporateAnnouncement1.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
    }
  ]

  const generalAnnouncement20Jun2023Data = [
    {
      link: "/assets/corporateAnnouncements/General Announcements/20th June 2023/NSE Acknowledgment.pdf",
      image: pdf,
      name: "NSE Acknowledgement",
      date: ""
    },
    {
      link: "/assets/corporateAnnouncements/General Announcements/20th June 2023/General Corporate Announcement.pdf",
      image: pdf,
      name: "General Corporate Announcement",
      date: ""
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
      <section className='corporateAnnouncementsPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Corporate Announcements</strong></h1>
      </section>

      <section className='container corporateAnnouncementsPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 corporateAnnouncementsPart2_1 p-3 d-none d-md-block'>
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
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
            <div className='investorRelationLink mb-3'>
              <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Corporate Announcements</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Corporate Announcements" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <h2 className='mt-2 p-1'><strong>Announcements</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(announcementData).map((data, index) => {
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
            <h2 className='mt-2 p-1'><strong>Board Meeting</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(boardMeetingData).map((data, index) => {
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
            <h2 className='mt-2 p-1'><strong>Financial Result</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(financialResultData).map((data, index) => {
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
            <h2 className='mt-2 p-1'><strong>General Announcements</strong></h2>
            <h4 className='mt-2 p-1'><strong>27th March 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement27Mar2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>26th March 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement26Mar2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>21st March 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement21Mar2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>10th March 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement10Mar2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>18th February 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement18Feb2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>14th February 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement14Feb2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>13th February 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement13Feb2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>10th February 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement10Feb2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>03rd February 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement03Feb2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>17th January 2025</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement17Jan2025Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>21st December 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement21Dec2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>26th November 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement26Nov2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>02nd August 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement02Aug2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>08th May 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement08May2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>05th March 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement05Mar2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>22nd February 2024</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement22Feb2024Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>20th December 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement20Dec2023Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>15th November 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement15Nov2023Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>12th October 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement12Oct2023Data).map((data, index) => {
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
            <h4 className='mt-2 p-1'><strong>20th June 2023</strong></h4>
            <div className='row mt-4 p-1'>
              {filtered(generalAnnouncement20Jun2023Data).map((data, index) => {
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

export default CorporateAnnouncements
