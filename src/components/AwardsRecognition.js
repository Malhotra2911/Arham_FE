import React from 'react'
import '../css/AwardsRecognition.css'
import certificate1 from '../assets/Certificate/1L.jpg'
import certificate2 from '../assets/Certificate/2L.jpg'
import certificate3 from '../assets/Certificate/3L.jpg'
import certificate4 from '../assets/Certificate/4.jpg'
import certificate5 from '../assets/Certificate/5.jpg'
import certificate6 from '../assets/Certificate/6.jpg'
import certificate7 from '../assets/Certificate/7.jpg'
import certificate8 from '../assets/Certificate/8.jpg'
import certificate9 from '../assets/Certificate/9.jpg'
import certificate10 from '../assets/Certificate/10.jpg'
import certificate11 from '../assets/Certificate/11.jpg'
import certificate12 from '../assets/Certificate/12.jpg'
import certificate13 from '../assets/Certificate/13.jpg'
import certificate14 from '../assets/Certificate/14.jpg'

const AwardsRecognition = () => {

  const certificateData = [
    {
      image : certificate1,
      title : "",
      description : "Arham Technologies Limited was awarded for its extra ordinary contribution to Make in India, at an event organised by Swadeshi Jagran Manch. Our Directors Mr. Ankkit Jain & Mr. Anekant Jain receiving the award by Honourable Cheif Minister of Chhattisgarh, Shri Vishnu Deo Sai.",
      date : "08/03/2025",
      class : "",
      receiving : "yes"
    },
    {
      image : certificate2,
      title : "",
      description : "STARSHINE WAS AWARDED “BRAND OF THE YEAR 2022” by NEWS MP CG. Our hardworking sales team collecting the award from Actor Sonu Sood.",
      date : "",
      class : "",
      receiving : "yes"
    },
    {
      image : certificate3,
      title : "",
      description : "ARHAM TECHNOLOGIES LIMITED WAS recognized as “CHHATTISGARH GAURAV”  Momento provided by Actress Neelam Kothari to our Directors Mr. Ankkit Jain & Mr. Anekant Jain.",
      date : "",
      class : "",
      receiving : "yes"
    },
    {
      image : certificate4,
      title : "",
      description : "Arham Technologies Limited, got listed on NSE on 15th December 2022, and momento provided by the Vice President ,Shri Achal Jaiswal, National Stock Exchange in presence of Chief Manager Shri Avik Gupta of National Stock Exchange.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate5,
      title : "",
      description : "Our Director Mr. Anekant Jain, was recognised at the 3rd Edition of Sourcex, International export promotion event organised by Federation of Indian Exports.",
      date : "28/03/2025",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate6,
      title : "",
      description : "Our Director, Anekant Jain, was provided certificate of Mastery, after completing the iconic 9 month program conducted by Business Coaching India, run by Honourable Shri Rahul Jain Sir.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate7,
      title : "",
      description : "Our Director, Ankit Jain, was provided certificate of Mastery, after completing the iconic 9 month program conducted by Business Coaching India, run by Honourable Shri Rahul Jain Sir.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate8,
      title : "",
      description : "Arham Technologies Limited, received appreciation for National Statistics office, for submitting the annual survey returns promptly. This shows our commitment towards corporate governance.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate9,
      title : "",
      description : "Arham Technologies Limited, was recognised by News18 MP CG team, for participating in cancer awareness program conducted by them.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate10,
      title : "",
      description : "Arham Technologies Limited was recognised by team of News18 MP CG, for participating in honouring the brave policemen who contributed to the society with bravery and valour and making Chhattisgarh a peaceful region.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate11,
      title : "",
      description : "Arham Technologies Limited was recognised by JITO youth wing, for sharing insights and knowledge on EMS and consumer durables sector, to the young entrepreneur of JITO.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate12,
      title : "",
      description : "Arham Technologies Limited, was recognised by Bank of Baroda, for being a longstanding customer and showing extra ordinary growth amongst its customers in the region.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate13,
      title : "",
      description : "Arham Technologies Ltd, was reconised by JCI youth wing, for exhibiting our STARSHINE products at a youth carnival. The event witnessed a footfall of over 5000 visitors.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
    {
      image : certificate14,
      title : "",
      description : "Arham Technologies Ltd, was reconised by Agrawal Yuva Manch, for  exhibiting our STARSHINE products at a kite festival organised by them. The event witnessed a footfall of over 4000 people.",
      date : "",
      class : "d-flex align-items-center",
      receiving : ""
    },
  ]

  const handleImageClick = (e) => {
    const image = e.target;
    if (image.requestFullscreen) {
      image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) {
      image.webkitRequestFullscreen(); // Safari
    } else if (image.msRequestFullscreen) {
      image.msRequestFullscreen(); // IE11
    }
  };

  return (
    <div>
      <section className='awardsRecognitionPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Awards & Recognition</strong></h1>
      </section>

      <section className='awardsRecognitionPart2 container p-4'>
        <div className='row' align='center'>
          {certificateData.map((row, index) => {
            return (
              <div className='col-lg-6' key={index}>
                  <div className="card mb-3 p-4" style={{maxWidth: '640px', minHeight: '450px'}}>
                      <div className="row g-0">
                        {!row.receiving ? 
                          <div className="col-md-6 mt-3 image-container">
                            <img src={row.image} className="img-fluid zoomable-image" alt="..." onClick={(e) => handleImageClick(e)} />
                          </div> : 
                          <div className="col-md-12 mt-3 image-container">
                            <img src={row.image} className="img-fluid zoomable-image" alt="..." onClick={(e) => handleImageClick(e)} />
                          </div>
                        }

                        {!row.receiving ?
                          <div className={`col-md-6 ${row.class}`} style={{ textAlign: 'left' }}>
                            <div className="card-body">
                              {row.date ? <h6>{row.date}</h6> : ""}
                              {row.title ? <h4 className="card-title"><strong>{row.title}</strong></h4> : ""}
                              {row.description ? <p className="card-text"><b>{row.description}</b></p> : ""}
                            </div>
                          </div> :
                          <div className={`col-md-12 ${row.class}`} style={{ textAlign: 'left' }}>
                            <div className="card-body">
                              {row.date ? <h6>{row.date}</h6> : ""}
                              {row.title ? <h4 className="card-title"><strong>{row.title}</strong></h4> : ""}
                              {row.description ? <p className="card-text"><b>{row.description}</b></p> : ""}
                            </div>
                          </div>
                        
                        }
                      </div>
                  </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default AwardsRecognition
