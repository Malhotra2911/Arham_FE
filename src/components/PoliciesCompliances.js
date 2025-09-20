import React, { useState } from 'react'
import '../css/PoliciesCompliances.css'
import { Link } from 'react-router-dom'
import pdf from '../assets/pdf.png'

const PoliciesCompliances = () => {

  const policyData = [
    {
      link: "/assets/policiesCompliances/policies/01_Archival-Policy.pdf",
      image: pdf,
      name: "Archival Policy"
    },
    {
      link: "/assets/policiesCompliances/policies/02_Code-of-Conduct-for-Directors.pdf",
      image: pdf,
      name: "Code of Conduct for key personnel"
    },
    {
      link: "/assets/policiesCompliances/policies/03_CODE-OF-PRACTICES-AND-FAIR-DISCLOSURE-OF-UPSI.pdf",
      image: pdf,
      name: "Code of practice & fair disclosure of UPSI"
    },
    {
      link: "/assets/policiesCompliances/policies/04_FAMILIARIZATION-PROGRAMME-FOR-INDEPENDENT-DIRECTORS.pdf",
      image: pdf,
      name: "Familiarization program for independent directors"
    },
    {
      link: "/assets/policiesCompliances/policies/04_FAMILIARIZATION-PROGRAMME-FOR-INDEPENDENT-DIRECTORS (1).pdf",
      image: pdf,
      name: "Familiarization program for independent directors"
    },
  ]

  const complianceDec2024 = [
    {
      link: "/assets/policiesCompliances/compliances/Dec2024/Covering_13(3).pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2024/Covering_74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2024/Reconciliation of Share Capital Audit Report.pdf",
      image: pdf,
      name: "Reconciliation Of Share Capital Audit Report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2024/Regarding exemption from Corporate Governance.pdf",
      image: pdf,
      name: "Regarding exemption from Corporate Governance"
    }
  ]

  const complianceSep2024 = [
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/CGReportseptemeber2024signed.pdf",
      image: pdf,
      name: "Regarding exemption from Corporate Governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/Covering133Signed.pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/Covering745Signed.pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/CoverPagealongwithComplianceCertificateSigned.pdf",
      image: pdf,
      name: "Structured Digital Database Compliance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/NonapplicabilityofdisclosureofRelatedPartyTranscationssigned.pdf",
      image: pdf,
      name: "Non-applicability of Disclosure"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/ReconciliationReportSeptember2024signed.pdf",
      image: pdf,
      name: "Reconciliation of Share Capital Audit Report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2024/SHP.pdf",
      image: pdf,
      name: "SHP"
    },
  ]

  const complianceJun2024 = [
    {
      link: "/assets/policiesCompliances/compliances/Jun2024/Covering-3(5)_Signed.pdf",
      image: pdf,
      name: "Regulation 3(5) & 3(6)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2024/Covering_13(3).pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2024/Covering_74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2024/ReconciliationOfShareCapitalAuditReport.pdf",
      image: pdf,
      name: "Reconciliation of Share Capital Audit Report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2024/Revised_Regarding exemption from Corporate Governance.pdf",
      image: pdf,
      name: "Regarding exemption from Corporate Governance"
    },
  ]

  const complianceMar2024 = [
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/ClosureoftradingwindowMarch2024Signed.pdf",
      image: pdf,
      name: "Closure of Trading Window"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/Covering409Signed.pdf",
      image: pdf,
      name: "Regulation 40(9)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/Covering745Signed.pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/Covering_13(3)Signed.pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/Covering_7(3)Signed.pdf",
      image: pdf,
      name: "Regulation 7(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/NonApplicabilityofCorporateGovrenanceSigned.pdf",
      image: pdf,
      name: "Non-applicability of Corporate Governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/NonapplicabilityofdisclosureofRelatedPartyTranscationsSigned.pdf",
      image: pdf,
      name: "Non-applicability of Disclosure"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/NonApplicabilityofSEBICircularAnnualDiscloserLargeEntitySigned.pdf",
      image: pdf,
      name: "Non-applicability of SEBI Circular"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/NonApplicabilityofSEBICircularInitialDiscloserLargeEntitySigned.pdf",
      image: pdf,
      name: "Non-applicability of SEBI Circular Initial Disclosure"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2024/ReconcilationofShareCapitalSigned.pdf",
      image: pdf,
      name: "Reconciliation of Share Capital Audit Report"
    },
  ]

  const complianceDec2023 = [
    {
      link: "/assets/policiesCompliances/compliances/Dec2023/Reconciliation-Report.pdf",
      image: pdf,
      name: "Reconciliation Report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2023/Regarding-exemption-from-Corporate-Governance.pdf",
      image: pdf,
      name: "Regarding exemption from corporate governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2023/Regulation-13(3).pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2023/Regulation-74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2023/SDD.pdf",
      image: pdf,
      name: "SDD Certificate"
    },
  ]

  const complianceSep2023 = [
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Reconciliation-Report-2023.pdf",
      image: pdf,
      name: "Reconciliation of share capital audit report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Non-applicabilty-of-disclosure-of-RPT.pdf",
      image: pdf,
      name: "Non applicability of disclosure of RPT"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Regarding-exemption-from-corporate-governance.pdf",
      image: pdf,
      name: "Regarding exemption from corporate governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Regulation13(3).pdf",
      image: pdf,
      name: "Regulation (13)3"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Regulation74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/SDD-with-compliance-certificate.pdf",
      image: pdf,
      name: "SDD with compliance certificate"
    },
    {
      link: "/assets/policiesCompliances/compliances/Sep2023/Shareholding-Pattern.pdf",
      image: pdf,
      name: "Shareholding Pattern"
    },
  ]

  const complianceJun2023 = [
    {
      link: "/assets/policiesCompliances/compliances/Jun2023/ReconciliationOfShareCapitalAuditReport.pdf",
      image: pdf,
      name: "Reconciliation of share capital audit report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2023/Regulation13(3).pdf",
      image: pdf,
      name: "Regulation (13)3"
    },
    {
      link: "/assets/policiesCompliances/compliances/Jun2023/Regulation74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
  ]

  const complianceMar2023 = [
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/Reconciliation-Report-march-2023.pdf",
      image: pdf,
      name: "Reconciliation of share capital audit report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/Shareholding-Pattern.pdf",
      image: pdf,
      name: "Shareholding Pattern"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/NonApplicabilityOfDdisclosureOfRelatedPartyTranscations.pdf",
      image: pdf,
      name: "Non applicability of disclosure of RPT"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/NonApplicabilityofSEBICircularAnnualDisclosureLargeEntity.pdf",
      image: pdf,
      name: "Non applicability of SEBI circular annual disclosure large entity"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/NonApplicabilityofSEBICircularInitialDisclosureLargeEntity.pdf",
      image: pdf,
      name: "Non applicability of SEBI circular initial disclosure large entity"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/RegardingExemptionFromCorporateGovernance.pdf",
      image: pdf,
      name: "Regarding exemption from corporate governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/Regulation-40(9).pdf",
      image: pdf,
      name: "Regulation 40(9)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/Regulation-74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Mar2023/Regulation-7(3).pdf",
      image: pdf,
      name: "Regulation 7(3)"
    },
  ]

  const complianceDec2022 = [
    {
      link: "/assets/policiesCompliances/compliances/Dec2022/ReconciliationOfShareCapitalAuditReport.pdf",
      image: pdf,
      name: "Reconciliation of share capital audit report"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2022/Regarding-Exemption-From-Corporate-Governance (1).pdf",
      image: pdf,
      name: "Regarding exemption from corporate governance"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2022/Regulation-13(3).pdf",
      image: pdf,
      name: "Regulation 13(3)"
    },
    {
      link: "/assets/policiesCompliances/compliances/Dec2022/Regulation-74(5).pdf",
      image: pdf,
      name: "Regulation 74(5)"
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
      <section className='policiesCompliancePart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Policies & Compliances</strong></h1>
      </section>

      <section className='container policiesCompliancePart2'>
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
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
            <h1><strong>Policies & Compliances</strong></h1>
            <div className="container-fluid p-3">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Policies & Compliances" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                </form>
            </div>
            <h2 className='mt-2 p-1'><strong>Policies</strong></h2>
            <div className='row mt-4 p-1'>
              {filtered(policyData).map((data, index) => {
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
            <h2 className='mt-2 pt-4'>Compliances<strong></strong></h2>
            <h4 className='p-1'><strong>December 2024</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceDec2024).map((data, index) => {
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
            <h4 className='p-1'><strong>September 2024</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceSep2024).map((data, index) => {
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
            <h4 className='p-1'><strong>June 2024</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceJun2024).map((data, index) => {
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
            <h4 className='p-1'><strong>March 2024</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceMar2024).map((data, index) => {
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
            <h4 className='p-1'><strong>December 2023</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceDec2023).map((data, index) => {
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
            <h4 className='p-1'><strong>September 2023</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceSep2023).map((data, index) => {
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
            <h4 className='p-1'><strong>June 2023</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceJun2023).map((data, index) => {
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
            <h4 className='p-1'><strong>March 2023</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceMar2023).map((data, index) => {
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
            <h4 className='p-1'><strong>December 2022</strong></h4>
            <div className='row mt-4 p-2'>
              {filtered(complianceDec2022).map((data, index) => {
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

export default PoliciesCompliances
