import React from 'react'
import '../css/AnnualReport.css'
import { Link } from 'react-router-dom'

const AnnualReport = () => {

  const tableData = [
    {
      row1: "2024-2025",
      row2: "/assets/annualReport/Annual-Report-2024-25.pdf",
      row3: ""
    },
    {
      row1: "2023-2024",
      row2: "/assets/annualReport/Annual-Report-2023-24.pdf",
      row3: "/assets/annualReport/Annual-Return-2023-24.pdf"
    },
    {
      row1: "2022-2023",
      row2: "/assets/annualReport/Annual-Report-2022-23.pdf",
      row3: "/assets/annualReport/Annual-Return-2022-23.pdf"
    },
    {
      row1: "2021-2022",
      row2: "/assets/annualReport/Annual-Report-2021-22.pdf",
      row3: "/assets/annualReport/Annual-Return-2021-22.pdf"
    },
    {
      row1: "2020-2021",
      row2: "/assets/annualReport/Annual-Report-2020-21.pdf",
      row3: "/assets/annualReport/Annual-Return-2020-21.pdf"
    },
    {
      row1: "2019-2020",
      row2: "/assets/annualReport/Annual-Report-2019-20.pdf",
      row3: "/assets/annualReport/Annual-Return-2019-20.pdf"
    },
  ]

  return (
    <div>
      <section className='annualReportPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Annual Report</strong></h1>
      </section>

      <section className='container annualReportPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 annualReportPart2_1 p-3 d-none d-md-block'>
            <h3 className='pb-3'>Investor Relation</h3>
            <div className='investorRelationLink mb-3'>
              <Link to="/boardOfDirector" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Board Of Directors</i></Link>
            </div>
            <div className='investorRelationLink mb-3'>
              <Link to="/committeesOfTheBoard" className='text-muted p-4' style={{ textDecoration: 'none' }}><i className="bi bi-caret-right">Committees Of The Board</i></Link>
            </div>
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Annual Reports</strong></h1>
            <div>
              <table className="table table-bordered text-center mt-4 p-4">
                <thead>
                  <tr>
                    <th scope="col" className='tableHeader'>Financial Year</th>
                    <th scope="col" className='tableHeader'>Annual Report</th>
                    <th scope="col" className='tableHeader'>Annual Return</th>
                  </tr>
                </thead>
                <tbody>
                {tableData.map((row,index) => {
                  return(
                    <tr key={index}>
                      <td>{row.row1}</td>
                      <td>{row.row2 ? (<Link to={row.row2} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#77221A' }}>Report [{row.row1}]</Link>) : ( "-" )}</td>
                      <td>{row.row3 ? (<Link to={row.row3} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#77221A' }}>Return [{row.row1}]</Link>) : ( "-" )}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnualReport
