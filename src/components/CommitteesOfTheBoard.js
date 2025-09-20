import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CommitteesOfTheBoard.css'
import mProfile from '../assets/maleProfile.png'
import fProfile from '../assets/femaleProfile.png'
import ankitJainImg from '../assets/team/ankitJain.jpg'
import manishAgrawalImg from '../assets/team/manishAgrawal.png'

const CommitteesOfTheBoard = () => {
  
  const auditCommittee = [
    {
      name: "Saurabh Agrawal",
      position: "Chairman",
      image: mProfile
    },
    {
      name: "Manish Agrawal",
      position: "Member",
      image: manishAgrawalImg
    },
    {
      name: "Ankit Jain",
      position: "Member",
      image: ankitJainImg
    },
  ];

  const stakeholdersCommittee = [
    {
      name: "Manish Agrawal",
      position: "Chairman",
      image: manishAgrawalImg
    },
    {
      name: "Rukmani Jain",
      position: "Member",
      image: fProfile
    },
    {
      name: "Ankit Jain",
      position: "Member",
      image: ankitJainImg
    },
  ];

  const nominationRemunerationCommittee = [
    {
      name: "Manish Agrawal",
      position: "Chairman",
      image: manishAgrawalImg
    },
    {
      name: "Rukmani Jain",
      position: "Member",
      image: fProfile
    },
    {
      name: "Saurabh Agrawal",
      position: "Member",
      image: mProfile
    },
  ];

  return (
    <div>
      <section className='committeesOfTheBoardPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Committees Of The Board</strong></h1>
      </section>

      <section className='container committeesOfTheBoardPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 committeesOfTheBoardPart2_1 p-3 d-none d-md-block'>
            <h3 className='pb-3'>Investor Relation</h3>
            <div className='investorRelationLink mb-3'>
              <Link to="/boardOfDirector" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Board Of Directors</i></Link>
            </div>
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
            <div className='investorRelationLink mb-3'>
              <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
            </div>
          </div>
          <div className='col-md-12 col-lg-8 scrollableContent pb-2' align='center'>
            <h1><strong>Committees Of The Board</strong></h1>
            <h3 className='p-3 mt-4'><strong>Audit Committee</strong></h3>
            <div className='row'>
              {auditCommittee.map((audit, index) => {
                return(
                    <div className='col-md-4 p-4' key={index}>
                      <div className="card">
                        <img src={audit.image} className="card-img-top mx-auto d-block p-2" alt="..." style={{ height: '40%' }} />
                        <div className="card-body">
                          <h5 className="card-title">{audit.name}</h5>
                          <p className='post'><strong>{audit.position}</strong></p>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
            <h3 className='pt-4 pb-3 mt-4'><strong>Stakeholders Relationship Committee</strong></h3>
            <p style={{ textAlign: 'left' }}>“Resolved That pursuant to provisions of section 178 of the Companies Act , 2013 (“the Act”) (including any statutory modification (s) or re-enactment (s) thereof for the time being in force read with the rules framed the reunder an Regulation, 2015 (“LODR”) as amended, a committee of the Board of Directors be and is hereby constituted be called as the “Stakeholders Relationship Committee” (“the Committee”) with the following members:</p>
            <div className='row'>
              {stakeholdersCommittee.map((data, index) => {
                return(
                    <div className='col-md-4 p-4' key={index}>
                      <div className="card">
                        <img src={data.image} className="card-img-top mx-auto d-block p-2" alt="..." style={{ height: '40%' }} />
                        <div className="card-body">
                          <h5 className="card-title">{data.name}</h5>
                          <p className='post'><strong>{data.position}</strong></p>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
            <h3 className='pt-4 pb-3 mt-4'><strong>Nomination & Remuneration Committee</strong></h3>
            <div className='row'>
              {nominationRemunerationCommittee.map((data, index) => {
                return(
                    <div className='col-md-4 p-4' key={index}>
                      <div className="card">
                        <img src={data.image} className="card-img-top mx-auto d-block p-2" alt="..." style={{ height: '40%' }} />
                        <div className="card-body">
                          <h5 className="card-title">{data.name}</h5>
                          <p className='post'><strong>{data.position}</strong></p>
                        </div>
                      </div>
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

export default CommitteesOfTheBoard
