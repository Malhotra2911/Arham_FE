import React, {useState} from 'react'
import '../css/BoardOfDirector.css'
import { Link } from 'react-router-dom'
import mProfile from '../assets/maleProfile.png'
import roshanJainImg from '../assets/team/roshanJain.jpg'
import ankitJainImg from '../assets/team/ankitJain.jpg'
import anekantJainImg from '../assets/team/anekantJain.png'
import manishAgrawalImg from '../assets/team/manishAgrawal.png'
import fProfile from '../assets/femaleProfile.png'

const BoardOfDirector = () => {

  const directors = [
    {
      name: "Mr. Roshan Jain",
      position: "Managing Director",
      description: `Mr. Roshan Jain, aged 58 years, with a B.Com Hons. Graduate degree, is the Managing Director of the company. He founded the Company in the year 2013. Mr. Jain’s tenacity and business acumen have brought several accolades and holistic growth to the Company and made Arham Technologies Ltd. an organized body of excellence. He has been the director of the company since its inception, with over 35 years of experience and was further designated as the Managing Director of the Company in the year 2013. His legacy is built on quality and innovation, both of which have become the cornerstones of Arham Technologies.`,
      image: roshanJainImg
    },
    {
      name: "Mr. Anekant Jain",
      position: "Chief Executive Officer",
      description: `Mr. Anekant Jain, aged 30 Years, with a B.Tech in Computer Science and an entrepreneurship course from XLRI, Jamshedpur, having 8 years of entrepreneurial Experience. Key expertise in Operations Management, family business improvement, efficiency through automation, and lean production techniques.`,
      image: anekantJainImg
    },
    {
      name: "Mr. Ankit Jain",
      position: "Executive Director & CFO",
      description: `Mr. Ankit Jain, aged 35 years, with a B.Tech in Electrical & Electronics and Entrepreneurship Course completion from IIT, Delhi, appointed as Executive Director in 2013 become CFO in the year 2017. Having 12 Years of Entrepreneurial Experience. Having knowledge of Technical and Management both areas of business. Focused in quality improvement and managing business in modern style using advanced tools and technology.`,
      image: ankitJainImg
    },
    {
      name: "Mr. Manish Agrawal",
      position: "Independent Director",
      description: `Mr. Manish Agrawal, aged 28 years, his key fields are internal audit & income tax. He is also very prompt in decision making and providing professional consultation in his area of practice. He has working experience of 4 years with various clients and has expertise knowledge in his field of assignments.`,
      image: manishAgrawalImg
    },
    {
      name: "Mr. Saurabh Agrawal",
      position: "Independent Director",
      description: `Mr. Saurabh Agrawal, Aged 33 years, Chartered Accountant with 10 years of practice. Having a key expertise in Operations Management, family business improved their efficiency by automating many manual processes that were initially being followed.`,
      image: mProfile
    },
    {
      name: "Mrs. Rukmani Jain",
      position: "Non Executive Women Director",
      description: `Mrs. Rukmani Jain, aged 56 years, With more than 25 years of experience in Human Resource, highly skilled in Behavior Analysis. She brings tremendous balance in Board of Arham Technologies Limited as her experience and knowledge in Human Resource will be helpful in employee retention.`,
      image: fProfile
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleText = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div>
      <section className='boardOfDirectorPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Board Of Director</strong></h1>
      </section>

      <section className='container boardOfDirectorPart2'>
        <div className='row mx-2 my-4 content'>
          <div className='col-md-12 col-lg-4 boardOfDirectorPart2_1 p-3 d-none d-md-block'>
            <h3 className='pb-3'>Investor Relation</h3>
            <div className='investorRelationLink investorRelationLinkActive mb-3'>
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
          <div className='col-md-12 col-lg-8 scrollableContent' align='center'>
            <h1><strong>Board Of Directors</strong></h1>
            {directors.map((director, index) => {
              return(
                  <div className="card mb-3 p-4" style={{maxWidth: '640px'}} key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={director.image} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8" style={{ textAlign: 'left' }}>
                        <div className="card-body">
                          <h3 className="card-title"><strong>{director.name}</strong></h3>
                          <p className='post'><strong>{director.position}</strong></p>
                          <p className={`card-text ${expandedCard === index ? '' : 'post-text'}`}>{director.description}</p>
                          <button onClick={() => toggleText(index)} className="btn btn-link p-0" style={{ color: "#77221A", textDecoration: "none" }}>
                            {expandedCard === index ? 'Show less' : 'Read more'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoardOfDirector
