import React from 'react'
import '../css/Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krdx507', 'template_eul65p2', e.target, 'Jwhtgvdb03lr3YcaT')
    .then((result) => {
        alert("Message Sent!");
        window.location.href = '/contact';
    }, (error) => {
        alert("Failed to send message:", error);
        window.location.href = '/contact';
    });

    e.target.reset();
  };

  return (
    <div>
      <section className='contactPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>Contact Information</strong></h1>
      </section>

      <section className='container p-4'>
        <div className='row'>
            <div className='col-lg-4'>
                <div className='contactInformationborder p-2 position-relative'>
                    <h5 className='contactHeading p-3'><strong>FOR TRADE RELATED ENQUIRIES</strong></h5>
                    <table className="table table-light table-bordered">
                        {/* <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <th scope="row">Contact No.</th>
                                <td><strong>+91 9575507031</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td><strong>support@arhamtechnologies.co.in</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-dark contact-btn" data-bs-toggle="modal" data-bs-target="#tradeRelatedEnquiriesModal">Contact Us</button>
                    <div className="modal fade" id="tradeRelatedEnquiriesModal" tabIndex="-1" aria-labelledby="tradeRelatedEnquiriesLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="tradeRelatedEnquiriesLabel"><strong>TRADE RELATED ENQUIRIES</strong></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ textAlign: 'left' }}>
                                    <form className='p-2' onSubmit={sendEmail}>
                                        <input type="hidden" name="title" value="TRADE RELATED ENQUIRIES" />
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'><strong>Name</strong></label>
                                            <input type='text' className='form-control' id='name' name='name' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"><strong>Your Email</strong></label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="phone" className='form-label'><strong>Contact Number</strong></label>
                                            <input type='tel' className='form-control' id='phone' name='phone' pattern='[0-9]{10,12}' minLength='10' maxLength='12' title='Phone number must be between 10 to 12 digits' required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="city" className='form-label'><strong>City</strong></label>
                                            <input type='text' className='form-control' id='city' name='city' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                                            <textarea className="form-control" id="message" name='message' rows="6" required ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='contactInformationborder p-2 position-relative'>
                    <h5 className='contactHeading p-3'><strong>FOR AFTER SALES & SERVICES</strong></h5>
                    <table className="table table-light table-bordered">
                        {/* <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <th scope="row">Contact No.</th>
                                <td><strong>+91 9575513015</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td><strong>support@arhamtechnologies.co.in</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-dark contact-btn" data-bs-toggle="modal" data-bs-target="#afterSalesModal">Contact Us</button>
                    <div className="modal fade" id="afterSalesModal" tabIndex="-1" aria-labelledby="afterSalesLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="afterSalesLabel"><strong>AFTER SALES & SERVICES</strong></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ textAlign: 'left' }}>
                                    <form className='p-2' onSubmit={sendEmail}>
                                        <input type="hidden" name="title" value="AFTER SALES" />
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'><strong>Name</strong></label>
                                            <input type='text' className='form-control' id='name' name='name' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"><strong>Your Email</strong></label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="phone" className='form-label'><strong>Contact Number</strong></label>
                                            <input type='tel' className='form-control' id='phone' name='phone' pattern='[0-9]{10,12}' minLength='10' maxLength='12' title='Phone number must be between 10 to 12 digits' required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="city" className='form-label'><strong>City</strong></label>
                                            <input type='text' className='form-control' id='city' name='city' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                                            <textarea className="form-control" id="message" name='message' rows="6" required ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='contactInformationborder p-2 position-relative'>
                    <h5 className='contactHeading p-3'><strong>FOR MEDIA & PRESS RELATED</strong></h5>
                    <table className="table table-light table-bordered">
                        {/* <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <th scope="row">Contact No.</th>
                                <td><strong>+91 9575507031</strong></td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td><strong>support@arhamtechnologies.co.in</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-dark contact-btn" data-bs-toggle="modal" data-bs-target="#mediaAndPressRelatedModal">Contact Us</button>
                    <div className="modal fade" id="mediaAndPressRelatedModal" tabIndex="-1" aria-labelledby="mediaAndPressRelatedLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="mediaAndPressRelatedLabel"><strong>MEDIA & PRESS RELATED</strong></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ textAlign: 'left' }}>
                                    <form className='p-2' onSubmit={sendEmail}>
                                        <input type="hidden" name="title" value="MEDIA & PRESS RELATED" />
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'><strong>Name</strong></label>
                                            <input type='text' className='form-control' id='name' name='name' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"><strong>Your Email</strong></label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="phone" className='form-label'><strong>Contact Number</strong></label>
                                            <input type='tel' className='form-control' id='phone' name='phone' pattern='[0-9]{10,12}' minLength='10' maxLength='12' title='Phone number must be between 10 to 12 digits' required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="city" className='form-label'><strong>City</strong></label>
                                            <input type='text' className='form-control' id='city' name='city' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                                            <textarea className="form-control" id="message" name='message' rows="6" required ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='contactInformationborder p-2 position-relative'>
                    <h5 className='contactHeading p-3'><strong>FOR INVESTOR RELATED</strong></h5>
                    <table className="table table-light table-bordered">
                        {/* <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td><strong>cs@arhamtechnologies.co.in</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-dark contact-btn" data-bs-toggle="modal" data-bs-target="#investorRelatedModal">Contact Us</button>
                    <div className="modal fade" id="investorRelatedModal" tabIndex="-1" aria-labelledby="investorRelatedLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="investorRelatedLabel"><strong>INVESTOR RELATED</strong></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ textAlign: 'left' }}>
                                    <form className='p-2' onSubmit={sendEmail}>
                                        <input type="hidden" name="title" value="INVESTOR RELATED" />
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'><strong>Name</strong></label>
                                            <input type='text' className='form-control' id='name' name='name' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"><strong>Your Email</strong></label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="phone" className='form-label'><strong>Contact Number</strong></label>
                                            <input type='tel' className='form-control' id='phone' name='phone' pattern='[0-9]{10,12}' minLength='10' maxLength='12' title='Phone number must be between 10 to 12 digits' required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="city" className='form-label'><strong>City</strong></label>
                                            <input type='text' className='form-control' id='city' name='city' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                                            <textarea className="form-control" id="message" name='message' rows="6" required ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='contactInformationborder p-2 position-relative'>
                    <h5 className='contactHeading p-3'><strong>FOR CAREER OPPORTUNITIES</strong></h5>
                    <table className="table table-light table-bordered">
                        {/* <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td><strong>hr@arhamtechnologies.co.in</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-outline-dark contact-btn" data-bs-toggle="modal" data-bs-target="#careerOpportunitiesModal">Contact Us</button>
                    <div className="modal fade" id="careerOpportunitiesModal" tabIndex="-1" aria-labelledby="careerOpportunitiesLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="careerOpportunitiesLabel"><strong>CAREER OPPORTUNITIES</strong></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='' style={{ textAlign: 'left' }}>
                                    <form className='p-2' onSubmit={sendEmail}>
                                        <input type="hidden" name="title" value="CAREER OPPORTUNITIES" />
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'><strong>Name</strong></label>
                                            <input type='text' className='form-control' id='name' name='name' required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"><strong>Your Email</strong></label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="phone" className='form-label'><strong>Contact Number</strong></label>
                                            <input type='tel' className='form-control' id='phone' name='phone' pattern='[0-9]{10,12}' minLength='10' maxLength='12' title='Phone number must be between 10 to 12 digits' required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="city" className='form-label'><strong>City</strong></label>
                                            <input type='text' className='form-control' id='city' name='city' required />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="file" className="form-label"><strong>Attach Your CV</strong></label>
                                            <input type="file" className="form-control" id="file" name="file" required />
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                                            <textarea className="form-control" id="message" name='message' rows="6" required ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </section>

      <section className='contactPart2 container p-4'>
        <div className='row'>
            <div className='col-md-6 p-4' style={{ textAlign: 'left', border: "3px double #F7C427" }}>
                <div>
                    <h2 style={{ color: "#77221A" }}><strong>Factory Address</strong></h2>
                    <p><strong>Address - 15, Electronics Manufacturing Cluster, Sector 22, New Raipur, Chhattisgarh, 492013</strong></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d952503.8595697001!2d81.755786!3d21.16361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c5edd38aef73%3A0x1303a32d22563aa2!2sArham%20Technologies%20Limited!5e0!3m2!1sen!2sus!4v1752139531849!5m2!1sen!2sus" width="600" height="250" style={{border:'1px solid white', borderRadius: '5px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Factory Address' ></iframe>
                </div>
            </div>
            <div className='col-md-6 p-4' style={{ textAlign: 'left', border: "3px double #F7C427" }}>
                <div>
                    <h2 style={{ color: "#77221A" }}><strong>Office Address</strong></h2>
                    <p><strong>Address - 5, Chowk, opp. Vyavsayik Sahkarik Bank, Near Jawahar Nagar, Chitrakut Complex, Jawahar Nagar, Raipur, Chhattisgarh 492001</strong></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1903941.5294465334!2d81.631929!3d21.246286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd9663ed4eaf%3A0x70d696cbdc2bfea0!2sArham%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1752139567354!5m2!1sen!2sin" width="600" height="250" style={{border:'1px solid white', borderRadius: '5px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Office Address' ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* <section className='contactPart3 container'>
        <div className="row">
            <div className='col-md-4'>
                <i className="bi bi-geo-alt" style={{ fontSize: '4rem', color: '#056EAD' }}></i>
                <div style={{ fontSize: "20px" }}><p><strong>Factory Address: </strong> 15, Electronics Manufacturing Cluster, Sector 22, New Raipur, Chhattisgarh, 492013</p></div>
                <div style={{ fontSize: "20px" }}><p><strong>Office Address: </strong> 5, Chowk, opp. Vyavsayik Sahkarik Bank, Near Jawahar Nagar, Chitrakut Complex, Jawahar Nagar, Raipur, Chhattisgarh 492001</p></div>
            </div>  
            <div className='col-md-4'>
                <i className="bi bi-telephone" style={{ fontSize: '4rem', color: '#056EAD' }}></i>
                <div style={{ fontSize: "20px" }}><p><strong>Call Us - <br /></strong>+91 8305582399 / +91 9575513015</p></div>
            </div>  
            <div className='col-md-4'>
                <i className="bi bi-envelope" style={{ fontSize: '4rem', color: '#056EAD' }}></i>
                <div style={{ fontSize: "20px" }}><p><strong>Email Us - <br /></strong>support@arhamtechnologies.co.in</p></div>
            </div>    
        </div>
      </section> */}
    </div>
  )
}

export default Contact
