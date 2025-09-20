import React from 'react'
import '../css/InvestorRelation.css'
import { Link } from 'react-router-dom'

const InvestorRelation = () => {
  return (
    <div>
      <section className='investorRelationPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Investor Relation</strong></h1>
      </section>

      <section className='container investorRelationPart2'>
        <div className='row mx-2 my-4 content'>
            <div className='col-md-12 col-lg-4 investorRelationPart2_1 p-3'>
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
                <div className='investorRelationLink mb-3'>
                  <Link to="/preferentialIssue" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Preferential Issue</i></Link>
                </div>
                <div className='investorRelationLink mb-3'>
                <Link to="/contact" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Contact Information</i></Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default InvestorRelation
