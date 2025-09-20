import React, { useState } from 'react'
import '../css/ShareholderInformation.css'
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf.png'

const ShareholderInformation = () => {

  const datas = [
    {
      name: "EGM Proceedings",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/13.ARHAM_24022025193946_EGM_Proceedings_signed.pdf",
    },
    {
      name: "Scrutinizer's Report",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/12.ARHAM_25022025203240_SCRUTINIZERS_REPORT_ARHAM.pdf",
    },
    {
      name: "Newspaper Advertisement",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/11.ARHAM_01022025174417_Covering_Newspaper_Adertisement_Arham.pdf",
    },
    {
      name: "Outcome of the meeting",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/10.ARHAM_29012025165505_Outcome_for_Arham_Rights.pdf",
    },
    {
      name: "Intimation of Record Date",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/9.ARHAM_31012025170559_Intimation_of_Record_Date.pdf",
    },
    {
      name: "Intimation Notice",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/8.ARHAM_31012025171212_Intimation_Notice_Arham.pdf",
    },
    {
      name: "Report",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/7.ARHAM_01102024201615_ReportSigned.pdf",
    },
    {
      name: "AGM Proceeding",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/6.ARHAM_01102024171457_AGMProceedingFinal.pdf",
    },
    {
      name: "Newspaper Advertisement",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/5.ARHAM_06092024135124_ArhamNewspaperAdertisementintimationsigned.pdf",
    },
    {
      name: "Intimation of Record Date",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/4.ARHAM_05092024200744_IntimationofRecordDatesign.pdf",
    },
    {
      name: "Intimation of Book Closure",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/3.ARHAM_05092024200547_IntimationofBookClosureArhamsign.pdf",
    },
    {
      name: "Notice",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/2.ARHAM_05092024195210_NoticeArhamsign.pdf",
    },
    {
      name: "EGM Proceedings",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/1.ARHAM_12042024165822_EGMProceedingSigned.pdf",
    },
    {
      name: "Shareholding Pattern",
      issue: "Pre Issue",
      image: pdf,
      link: "/assets/shareholdersInformation/PRE_ISSUE_091222.pdf",
    },
    {
      name: "Basis of Allotment",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/Stat_BOA-Adv_Arham.pdf",
    },
    {
      name: "Shareholding Pattern",
      issue: "Post Issue",
      image: pdf,
      link: "/assets/shareholdersInformation/POST_ISSUE_131222.pdf",
    },
    {
      name: "Shareholding Pattern 2025",
      issue: "",
      image: pdf,
      link: "/assets/shareholdersInformation/shareholding-pattern-2025.pdf",
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
      <section className='shareholderInformationPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Shareholder's Information</strong></h1>
      </section>

      <section className='container shareholderInformationPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 shareholderInformationPart2_1 p-3 d-none d-md-block'>
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
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
            <div className='investorRelationLink mb-3'>
              <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Shareholder's Information</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Shareholder's Information" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <div className='row mt-4 p-1'>
              {filtered(datas).map((data, index) => {
                return(
                  <div className='col-6 col-md-4 p-4' key={index} align='center'>
                    <Link to={data.link} target='_blank' style={{ textDecoration: 'none' }}>
                    <div className="card">
                      <img src={data.image} className="card-img-top mx-auto d-block p-1" alt="..." style={{ height: '120px', width: '120px' }} />
                      <div className="card-body">
                        <h6 className="card-text">{data.name}</h6>
                        {data.issue ? (<p className='post'><strong>{data.issue}</strong></p>) : ""}
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

export default ShareholderInformation
