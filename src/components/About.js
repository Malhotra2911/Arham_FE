import React, { useState, useEffect } from 'react'
import '../css/About.css'
import roshanJainImg from '../assets/team/roshanJain.jpg'
import ankitJainImg from '../assets/team/ankitJain.jpg'
import anekantJainImg from '../assets/team/anekantJain.png'
import nagendraKumarMehtaImg from '../assets/team/nagendraMehta.jpg'
import mayankNayakImg from '../assets/team/mayankNayak.jpg'
import vipulKumarImg from '../assets/team/vipulKumar.jpg'
import lokendraKumarImg from '../assets/team/lokendraKumar.jpg'
import aboutImage from '../assets/aboutImage1e.jpg'
import aboutTV from '../assets/aboutTV.png'
import aboutFan from '../assets/aboutFan.png'
import { useInView } from 'react-intersection-observer'
import { useLocation } from 'react-router-dom'

const About = () => {

  const teamData = [
    {
        name : 'Mr. Roshan Jain',
        position: "Managing Director",
        description: `Mr. Roshan Jain, 58, is the founder and Managing Director of Arham Technologies Limited. A B.Com (Hons.) graduate with over 35 years of experience, he has been instrumental in building a strong dealer and distribution network for the company. Known for his expertise in relationship-building and strategic expansion, Mr. Jain has led Arham Technologies with a clear focus on quality, innovation, and long-term value creation.
Under his leadership, the company has earned a trusted reputation in the electronics industry.`,
        image: roshanJainImg
    },
    {
        name: "Mr. Ankit Jain",
        position: "CFO & Executive Director",
        description: `Mr. Ankit Jain, 35, is the CFO and Executive Director of Arham Technologies Limited. A B.Tech graduate in Electrical & Electronics with an Entrepreneurship certification from IIT Delhi, he brings over 14 years of entrepreneurial experience.
Appointed as Executive Director in 2013 and designated CFO in 2017, Mr. Jain possesses strong expertise in both technical and managerial domains. He plays a key role in driving quality improvements and managing the business with a modern, tech-driven approach.`,
        image: ankitJainImg
    },
    {
        name: "Mr. Anekant Jain",
        position: "CEO & Executive Director",
        description: `Mr. Anekant Jain, 30, is the Director of Operations at Arham Technologies Limited. A B.Tech graduate in Computer Science with an Entrepreneurship certification from XLRI Jamshedpur, he brings 10 years of entrepreneurial experience with a strong focus on operational excellence.
He has played a pivotal role in automating manual processes, improving production efficiency, and implementing lean management techniques. His efforts have significantly enhanced product quality and streamlined operations across the company.`,
        image: anekantJainImg
    },
    {
        name: "Mr. Nagendra Kumar Mehta",
        position: "Plant Head",
        description: `Mr. Nagendra Kumar Mehta brings over 22 years of experience in electronics assembly and injection moulding operations. With technical qualifications including ITI and a Diploma in Electronics, he has led production teams at reputed firms like Dixon Technologies and LG’s export unit. As Plant Head at Arham Technologies Limited, he focuses on streamlining operations, enhancing quality, and driving manufacturing efficiency.`,
        image: nagendraKumarMehtaImg
    },
    {
        name: "Mr. Mayank Nayak",
        position: "Head Of Accounts",
        description: `Mr. Mayank Nayak is a qualified finance professional with a B.Com in Accounts & Finance and CA Intermediate credentials from ICAI. He is also a registered GST Practitioner with certified IT and orientation training from ICAI.
With over 6 years of experience, he brings strong expertise in financial reporting, taxation, and regulatory compliance, playing a key role in managing finance department in Arham Technologies.`,
        image: mayankNayakImg
    },
    {
        name: "Mr. Vipul Kumar",
        position: "Human Resources Manager",
        description: `Mr. Vipul Kumar, armed with an MBA in HR, leads the team with a focus on efficient resource management and strong people-centric leadership. His strategic approach to team building and performance optimization has consistently driven results. With a calm and solution-oriented mindset, he ensures smooth coordination across departments.`,
        image: vipulKumarImg
    },
    {
        name: "Mr. Lokendra Kumar",
        position: "Software Developer",
        description: `Mr. Lokendra Kumar is a Software Developer at Arham Technologies Limited, holding a B.Tech in Computer Science from OP Jindal University. He specializes in full-stack and backend development using technologies like Node.js, React.js, MongoDB, and Zoho Creator.
At Arham, he is responsible for developing and managing internal software systems, contributing to automation, efficiency, and digital innovation within the organization.`,
        image: lokendraKumarImg
    }
  ]

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleText = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  const location = useLocation();

  useEffect(() => {
    // Wait for DOM to load
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <section className='aboutPart1'>
        {/* <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>About Us</strong></h1> */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    {/* <img src={about1} className="d-none d-md-block w-100" alt="Desktop View" style={{ maxHeight: "100vh" }} /> */}
                    {/* <img src={m1} className="d-block d-md-none w-100" alt="Mobile View" /> */}
                </div>
            </div>
        </div>
      </section>

      <section className='aboutPart3'>
        <div className='container'>
            <div>
                <h2 style={{color: "#77221A"}}><strong>About Arham Technologies</strong></h2>
                {/* <h1 style={{color: "#056EAD"}}><strong className='p-2'>Since 2013 Leading Smart Television Manufacturer In India.</strong></h1> */}
                <h1 style={{color: "#056EAD"}} className='mt-4'><strong className='p-2'>Leading the Future of Home Appliance Manufacturing</strong></h1> 
                <h4 style={{color: "#056EAD"}}><strong>Smart Televisions | Fans | BLDC Smart Fans | Coolers | Washing Machines | Mixer Grinders</strong></h4>
                <div className='row p-4'>
                    {/* <div className='col-md-5 mt-4 py-md-4'> */}
                    <div className='col-12 col-md-5 order-1 order-md-2 mt-md-4'>
                        <img src={aboutImage} alt='...' />
                    </div>
                    {/* <div className='col-md-7'> */}
                    <div className='col-12 col-md-7 order-2 order-md-1'>
                        <div className='p-2 text-muted' style={{ fontSize: '18px' }}>
                            <p  style={{ textAlign: 'left' }}><strong>We don’t define success by how fast we grow — we define it by how deeply we build.</strong></p>
                            <p style={{ textAlign: 'left' }}>At Arham Technologies Limited, growth is not a race — it's a responsibility. Founded in 2013 in Chhattisgarh, Arham was built on the belief that Bharat’s future must be shaped by its own hands — with skill, scale, and purpose. Over the years, Arham has emerged as a trusted force in India’s electronics manufacturing sector — backed by world-class infrastructure including Class 1K clean rooms, ESD-controlled assembly lines, automated stator winding, and multi-stage quality testing systems. We manufacture Smart Televisions, Ceiling Fans, Table Fans, Pedestal Fans, Exhaust Fans, and Air Coolers — essential products that meet the everyday needs of Indian households. Each product is engineered for performance, durability, and reliability in real-world conditions — from voltage fluctuations to extended operating hours. Our manufacturing focus reflects our strength — built on mastery, not spread thin across categories. We prioritise quality, consistency, and long-term impact in every product we produce. Taking this commitment from factory to household is our in-house brand — Starshine. Born with the vision to deliver high-quality, accessible appliances to the heart of India, Starshine brings the same discipline, trust, and care into homes across the country. Starshine is fast becoming a familiar name across India’s growing consumption corridors — trusted by families who seek value without compromise, and technology that’s built to last. Today, Starshine’s product range includes: Smart Televisions, Washing Machines, Ceiling Fans, Table Fans, Pedestal Fans, Exhaust Fans, Mixer Grinders, and Air Coolers. Arham is proudly certified by BIS, ISO, BEE, and ZED, and aligned with the national vision of Aatmanirbhar Bharat. But beyond certifications, it is our conviction that drives us — to manufacture with integrity, scale with responsibility, and serve Bharat with pride. This is Arham - built with purpose, driven by belief, and made for Bharat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='container p-4 aboutPart6' id='manufacturingPowerhouse'>
        <h2 className='aboutPart6Heading' style={{color: "#77221A"}}><strong>Manufacturing Powerhouse</strong></h2>
        <div className='row p-2' align='center' id='tvManufacturing'>
            <div className='col-md-6 p-4' >
                <h2 className='mb-0' style={{ color: '#1d6c34' }}><strong>Smart Television Manufacturing</strong></h2>
                <h3 className='mt-0' style={{ color: '#1d6c34' }}>(Where Quality Takes Shape)</h3>
                <h4 className='text-muted p-2'>Central India's First TV Factory with Clean Room Assembly</h4>
                {/* <div className='aboutPart6HeadingText' style={{ textAlign: 'left' }}>
                    <ul className='p-4'>
                        <li><h4>Central India's First TV Factory with Clean Room Assembly</h4></li>
                    </ul>
                </div> */}
                <div style={{ textAlign: 'left' }}>
                <h3 style={{ backgroundColor: '#fcc837', textAlign: 'center', padding: '2px' }}>Why Our Smart TVs Never Miss a Beat?</h3>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><h4>3kV High Voltage Testing</h4></li>
                                <li><h4>Multi-Voltage Simulation</h4></li>
                                <li><h4>1K Class Clean Room Panel Assembly</h4></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><h4>45 min Aging Test</h4></li>
                                <li><h4>Pattern & Pixel Accuracy Check</h4></li>
                                <li><h4>HDMI, USB, Wi-Fi, Smart OS Testing</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 p-4 d-none d-md-block'>
                <img src={aboutTV} alt='...' /> 
            </div>
        </div>
        <div className='row' align='center' id='fanManufacturing'>
            <div className='col-md-6 p-4 d-none d-md-block' >
                <img src={aboutFan} alt='...' />
            </div>
            <div className='col-md-6 p-4'>
                <h2 className='mb-0' style={{ color: '#1d6c34' }}><strong>Fan Manufacturing</strong></h2>
                <h3 className='mt-0' style={{ color: '#1d6c34' }}>(Engineered For Everyday Durability)</h3>
                <h4 className='text-muted p-2'>Made for Bharat, Tested for the World</h4>
                {/* <div className='aboutPart6HeadingText' style={{ textAlign: 'left' }}>
                    <ul className='p-4'>
                        <li><h4>Made for Bharat, Tested for the World</h4></li>
                    </ul>
                </div> */}
                <div style={{ textAlign: 'left' }}>
                <h3 style={{ backgroundColor: '#fcc837', textAlign: 'center', padding: '2px' }}>Why Every Fan Delivers Consistent Comfort?</h3>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><h4>High Voltage Insulation</h4></li>
                                <li><h4>Voltage Stress Test</h4></li>
                                <li><h4>Soundproof Noise Chamber</h4></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><h4>Wattage Efficiency Check</h4></li>
                                <li><h4>Airflow + RPM Calibration</h4></li>
                                <li><h4>Blade Angle Precision</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='container aboutPart4'>
        <div className='row' align='center'>
            <div className='col-md-6 col-lg-4 p-3' key={1}>
                <div className="card aboutCardBgColor" style={{ textAlign: 'left'}}>
                    <div className="card-body">
                        <h3 className="card-title"><i className="bi bi-bullseye p-4" style={{ fontSize: '2rem' }}></i><strong style={{  color: "#77221A" }}>Our Mission</strong></h3>
                        <p className={`card-text ${expandedCard === 1 ? '' : 'aboutUsText'}`}>To build a brand that every Indian can be proud of where world-class quality, design excellence, and homegrown innovation come together in every product we make. <br />At Arham Technologies, our mission is to redefine how India experiences consumer electronics—by ensuring that every product is built for performance, styled for aspiration, and trusted for life. From our cutting-edge clean room manufacturing floors to our widespread distribution network, every touchpoint is aligned with one goal: <br />To engineer technology that not only works—but uplifts, empowers, and inspires households across the nation.</p>
                        <button onClick={() => toggleText(1)} className="btn btn-link p-0" style={{ color: "#77221A", textDecoration: "none" }}>
                            {expandedCard === 1 ? 'Show less' : 'Read more'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 p-3' key={2}>
                <div className="card aboutCardBgColor" style={{ textAlign: 'left'}}>
                    <div className="card-body">
                        <h3 className="card-title"><i className="bi bi-globe p-4" style={{ fontSize: '2rem' }}></i><strong style={{  color: "#77221A" }}>Our Vision</strong></h3>
                        <p className={`card-text ${expandedCard === 2 ? '' : 'aboutUsText'}`}>To become the most admired and enduring consumer electronics brand for the New India—an India that is growing beyond the metros, driven by confidence, ambition, and pride. <br /> We envision Arham and Starshine as symbols of a resilient, self-reliant, and aspirational Bharat, delivering products that stand tall in quality, design, and reliability—while being deeply rooted in Indian values. <br />Our vision is to lead the transformation of the wider Indian market by setting new benchmarks in manufacturing excellence, product relevance, and emotional connection with the consumer. <br /> Just as India moves forward with the vision that “the next metros are rising in the heartlands”, we are here to ensure that our products reach, represent, and reflect this rising India.</p>
                        <button onClick={() => toggleText(2)} className="btn btn-link p-0" style={{ color: "#77221A", textDecoration: "none" }}>
                            {expandedCard === 2 ? 'Show less' : 'Read more'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 p-3' key={3}>
                <div className="card aboutCardBgColor" style={{ textAlign: 'left'}}>
                    <div className="card-body">
                        <h3 className="card-title"><i className="bi bi-link-45deg p-4" style={{ fontSize: '2rem' }}></i><strong style={{  color: "#77221A" }}>Our Values</strong></h3>
                        <p className={`card-text ${expandedCard === 3 ? '' : 'aboutUsText'}`}>Arham Means Perfection. <br />At Arham, perfection is our foundation—not just in what we make, but in how we think, act, and grow. <br /> We believe in craftsmanship with purpose, building products that reflect precision, durability, and pride. Every detail matters—because our customers deserve nothing less. <br />Our values are anchored in integrity, excellence, and a deep commitment to the aspirations of the New India. We serve a nation that’s evolving fast—and we’re here to deliver products that match its momentum. <br />With every product we release, we build more than technology. <br />We build trust. We build legacy. We build India.</p>
                        <button onClick={() => toggleText(3)} className="btn btn-link p-0" style={{ color: "#77221A", textDecoration: "none" }}>
                            {expandedCard === 3 ? 'Show less' : 'Read more'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='container aboutPart5 p-4'>
        <h2 className='p-4' style={{color: "#77221A"}}><strong>Meet Our Team</strong></h2>
        <div className='row p-4'>
            {teamData.map((row, index) => {
                return (
                    <div className='col-lg-6' key={index}>
                        <div className="card mb-3 p-4" style={{maxWidth: '640px'}}>
                            <div className="row g-0">
                            <div className="col-md-4 mt-3">
                                <img src={row.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8" style={{ textAlign: 'left' }}>
                                <div className="card-body">
                                <h4 className="card-title"><strong>{row.name}</strong></h4>
                                <p className='post'><strong>{row.position}</strong></p>
                                <p className={`card-text ${expandedCard === index ? '' : 'postDesc'}`}>{row.description}</p>
                                <button onClick={() => toggleText(index)} className="btn btn-link p-0" style={{ color: "#77221A", textDecoration: "none" }}>
                                    {expandedCard === index ? 'Show less' : 'Read more'}
                                </button>
                                </div>
                            </div>
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

export default About
