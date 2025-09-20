import React, {useState, useEffect, useRef} from 'react'
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import d4 from '../assets/d4.jpg'
import d5 from '../assets/d5.jpg'
import d6 from '../assets/d6.jpg'
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.jpg'
import m6 from '../assets/m6.jpg'
import '../css/Home.css'
import zed from '../assets/zed.png'
import bis from '../assets/bis.png'
import bee from '../assets/bee.png'
import rohs from '../assets/ROHS.png'
import iso from '../assets/ISO.png'
import iso14001 from '../assets/ISO14001.png'
import iso50001 from '../assets/ISO50001.png'
import iso45001 from '../assets/ISO45001.png'
import bisElectronics from '../assets/BIS_Electronics.png'
import tradePartners from '../assets/tradePartners.png'
import panIndia from '../assets/panIndia.png'
import greens from '../assets/9greens.png'
import captaan from '../assets/captaan.png'
import egossmart from '../assets/egossmart.png'
import ryko from '../assets/ryko.png'
import electrize from '../assets/electrize.png'
import starFast from '../assets/starFast.png'
import aratton from '../assets/aratton.png'
import broadwell from '../assets/broadwell.png'
import starshineLogo from '../assets/Starshine Logo png.png'
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const Home = () => {

  const [player, setPlayer] = useState(null);
  const [sliderReady, setSliderReady] = useState(false);
  const [hoverd1, setHoverd1] = useState(false);
  const [hoverd2, setHoverd2] = useState(false);
  const [hoverd3, setHoverd3] = useState(false);
  const [hoverd4, setHoverd4] = useState(false);
  const [hoverd5, setHoverd5] = useState(false);
  const [hoverd6, setHoverd6] = useState(false);
  const [hoverd7, setHoverd7] = useState(false);
  const [hoverd8, setHoverd8] = useState(false);
  const videoRef = useRef(null);
  const [playerm, setPlayerm] = useState(null);


  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {

    const carousel = document.querySelector('#carouselExampleDark');
    if (carousel) {
      // Force start the carousel programmatically
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: 'carousel',
        pause: false,
      });
    }

    // Load the YouTube IFrame API only once
    const existingScript = document.getElementById('youtube-api');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'youtube-api';
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
        const ytPlayer = new window.YT.Player('yt-player', {
            events: {
                onReady: (event) => {
                    event.target.mute(); // mute to allow autoplay
                    setPlayer(event.target);
                }
                }
            });
            };
  }, []);

  // For mobile View, YT video is playing automatically when in view
  // Create YouTube player
  const createPlayer = () => {
    const ytPlayer = new window.YT.Player("yt-player", {
      events: {
        onReady: () => {
          setPlayerm(ytPlayer);
        }
      }
    });
  };

  // Load API and create player
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      // API already loaded
      createPlayer();
    } else {
      // Load the script
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      // Wait for API to be ready
      window.onYouTubeIframeAPIReady = createPlayer;
    }
  }, []);

  // Auto-play/pause when in view on mobile
  useEffect(() => {
    if (!playerm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.innerWidth < 768) {
            if (entry.isIntersecting) {
              playerm.playVideo();
            } else {
              playerm.pauseVideo();
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [playerm]);

  // For mobile View, YT video is playing automatically when in view

  const handleMouseEnter = () => {
    if (player && player.playVideo) {
            player.playVideo();
        }
    };

  const handleMouseLeave = () => {
    if (player && player.pauseVideo) {
            player.pauseVideo();
        }
    };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5, // Change based on screen
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  }

  const section2Settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3, // Change based on screen
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  }

  const barSettings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 2, // Change based on screen
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSliderReady(true);
    }, 5000); // Adjust if needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='home'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active d-none d-md-block" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="d-none d-md-block" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="d-none d-md-block" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="d-none d-md-block" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" className="d-none d-md-block" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" className="d-none d-md-block" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active position-relative" data-bs-interval="3000">
                    <img src={d1} className="d-none d-md-block w-100" alt="Desktop View" />
                    <img src={m1} className="d-block d-md-none w-100" alt="Mobile View" />

                    <div className="position-absolute text-center homeCTA1">
                      <button className="btn btn-primary" onClick={scrollToVideo}>
                        <strong>Explore Our Factory</strong>
                      </button>
                    </div>
                </div>
                <Link  to='https://starshine.co.in' target='_blank' className="carousel-item position-relative" data-bs-interval="3000">
                    <img src={d2} className="d-none d-md-block w-100" alt="..." />
                    <img src={m2} className="d-block d-md-none w-100" alt="Mobile View" />
                </Link>
                <Link  to='https://starshine.co.in' target='_blank' className="carousel-item position-relative" data-bs-interval="3000">
                    <img src={d3} className="d-none d-md-block w-100" alt="..." />
                    <img src={m3} className="d-block d-md-none w-100" alt="Mobile View" />
                </Link>
                <Link  to='https://starshine.co.in' target='_blank' className="carousel-item position-relative" data-bs-interval="3000">
                    <img src={d4} className="d-none d-md-block w-100" alt="..." />
                    <img src={m4} className="d-block d-md-none w-100" alt="Mobile View" />
                </Link>
                <Link  to='https://starshine.co.in' target='_blank' className="carousel-item position-relative" data-bs-interval="3000">
                    <img src={d5} className="d-none d-md-block w-100" alt="..." />
                    <img src={m5} className="d-block d-md-none w-100" alt="Mobile View" />
                </Link>
                <div className="carousel-item position-relative" data-bs-interval="3000">
                    <img src={d6} className="d-none d-md-block w-100" alt="..." />
                    <img src={m6} className="d-block d-md-none w-100" alt="Mobile View" />

                    <div className="position-absolute text-center homeCTA2">
                      <button className="btn btn-primary" onClick={scrollToVideo}>
                        <strong>Explore Our Factory</strong>
                      </button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div style={{ backgroundColor: "#f8f8f8" }}>
          {sliderReady ? (
            <Slider {...barSettings}>
              <div className='slider-item'>
                <span className="dot">•</span>
                <strong>Empowering Electronics Manufacturing from Central India to the World</strong>
                <span className="dot">•</span>
              </div>
              <div className='slider-item'>
                <span className="dot">•</span>
                <strong>Empowering Electronics Manufacturing from Central India to the World</strong>
                <span className="dot">•</span>
              </div>
            </Slider>
          ) : (<div>Loading...</div>)}
        </div>

        <div className='container p-4 mt-4'>
          <div className='row justify-content-center'>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox1Img pointerBoxHover' to='/about#manufacturingPowerhouse'>
                <p className='pointerBoxText'><strong>45000 sq feet Factory Area</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3  pointerBox2Img pointerBoxHover' to='/about#tvManufacturing'>
                <p className='pointerBoxText'><strong>TV Manufacturing Scale: 300K Units Annually</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox3Img pointerBoxHover' to='/about#fanManufacturing'>
                <p className='pointerBoxText'><strong>Fan Manufacturing Scale: 500K Units Annually</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox4Img pointerBoxHover' to='/about#manufacturingPowerhouse'>
                <p className='pointerBoxText'><strong>Making Significant Contribution in EMS Industry</strong></p>
            </Link>
          </div>
        </div>

        <div className='container p-4 mt-4' align='center'>
          <p className='headingFontSize'><strong>BRANDS THAT RELY ON OUR EXPERTISE</strong></p>
          {sliderReady ? (
            <Slider {...settings}>
              <div className='p-1 centered-slide'><img src={greens} className='certificate' alt='9 Greens' /></div>
              <div className='p-1 centered-slide'><img src={captaan} className='certificate' alt='Captaan' /></div>
              <div className='p-1 centered-slide'><img src={egossmart} className='certificate' alt='Ego Smart' /></div>
              <div className='p-1 centered-slide'><img src={ryko} className='certificate' alt='Ryko' /></div>
              <div className='p-1 centered-slide'><img src={aratton} className='logoAB' alt='Aratton' /></div>
              <div className='p-1 centered-slide'><img src={electrize} className='certificate' alt='Electrize' /></div>
              <div className='p-1 centered-slide'><img src={starFast} className='certificate' alt='Star Fast' /></div>
              <div className='p-1 centered-slide'><img src={broadwell} className='logoAB' alt='Broadwell' /></div>
            </Slider>
          ) : (<div>Loading...</div>)}
        </div>

        <div className='container p-4 mt-4'>
          <div className='row section2Box'>
            <div className='col-md-6 p-3' style={{ textAlign: 'left' }}>
              <div className='section2HeadingL'>
                <img src={starshineLogo} alt='...' />
              </div>
              <div className='section2TextL enhanced-list p-3'>
                <ul className='features-list'>
                  <li>
                    <i className="bi bi-award-fill feature-icon"></i>
                    <div className='feature-text'>
                      <strong>Delivering Excellence Since 2008</strong>
                      {/* <p>Serving customers with quality since 2008</p> */}
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-box-seam feature-icon"></i>
                    <div className='feature-text'>
                      <strong>10 Lakh+ Products Sold Nation Wide</strong>
                      {/* <p>Across every corner of the nation</p> */}
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill feature-icon"></i>
                    <div className='feature-text'>
                      <strong>Pan India Customer Service</strong>
                      {/* <p>Service coverage throughout the country</p> */}
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-people-fill feature-icon"></i>
                    <div className='feature-text'>
                      <strong>500+ Trade Partners</strong>
                      {/* <p>Building trust and growing together</p> */}
                    </div>
                  </li>
                </ul>
              </div>
              <div className='section2ButtonL'>
                <Link to='/about' type="button" className="btn btn-dark p-2 s2bl">OUR STORY <span><i className="bi bi-arrow-right"></i></span></Link>
                <br />
                <br />
                <Link to='/contact' type="button" className="btn btn-outline-dark p-2 s2bl">CONTACT US <span><i className="bi bi-arrow-right"></i></span></Link>
              </div>
            </div>
            <div className='col-md-6 p-3' style={{ textAlign: 'left' }}>
              <div className='row'>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/collections/television' target='_blank' className='col-6 col-md-4 categoryImage1 categoryHover' onMouseEnter={() => setHoverd1(true)} onMouseLeave={() => setHoverd1(false)}>
                    <p className='categoryMargin'><strong>SMART TV</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd1 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/collections/ceiling-fan' target='_blank' className='col-6 col-md-4 categoryImage2 categoryHover' onMouseEnter={() => setHoverd2(true)} onMouseLeave={() => setHoverd2(false)}>
                    <p className='categoryMargin'><strong>CEILING FAN</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd2 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/collections/air-coolers' target='_blank' className='col-6 col-md-4 categoryImage3 categoryHover' onMouseEnter={() => setHoverd3(true)} onMouseLeave={() => setHoverd3(false)}>
                    <p className='categoryMargin'><strong>COOLER</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd3 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/collections/washing-machine' target='_blank' className='col-6 col-md-4 categoryImage4 categoryHover' onMouseEnter={() => setHoverd4(true)} onMouseLeave={() => setHoverd4(false)}>
                    <p className='categoryMargin'><strong>WASHING MACHINE</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd4 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/collections/mixer-grinder' target='_blank' className='col-6 col-md-4 categoryImage5 categoryHover' onMouseEnter={() => setHoverd5(true)} onMouseLeave={() => setHoverd5(false)}>
                    <p className='categoryMargin'><strong>MIXER GRINDER</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd5 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in' target='_blank' className='col-6 col-md-4 categoryImage6 categoryHover' onMouseEnter={() => setHoverd6(true)} onMouseLeave={() => setHoverd6(false)}>
                    <p className='categoryMargin'><strong>PEDESTAL FAN</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd6 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in' target='_blank' className='col-6 col-md-4 categoryImage7 categoryHover' onMouseEnter={() => setHoverd7(true)} onMouseLeave={() => setHoverd7(false)}>
                    <p className='categoryMargin'><strong>TABLETOP FAN</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd7 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in' target='_blank' className='col-6 col-md-4 categoryImage8 categoryHover' onMouseEnter={() => setHoverd8(true)} onMouseLeave={() => setHoverd8(false)}>
                    <p className='categoryMargin'><strong>EXHAUST FAN</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd8 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
                  <Link style={{ textDecoration: 'none' }} to='https://starshine.co.in/products/3in-1-multi-purpose-fan' target='_blank' className='col-6 col-md-4 categoryImage9 categoryHover' onMouseEnter={() => setHoverd8(true)} onMouseLeave={() => setHoverd8(false)}>
                    <p className='categoryMargin'><strong>3 IN 1 MULTIPURPOSE FAN</strong></p>
                    <p className='explore'>Explore <span><i className={`bi ${hoverd8 ? 'bi-arrow-right-circle-fill' : 'bi-arrow-up-right-circle'} `}></i></span></p>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='container p-4 mt-4' align='center'>
          <p className='headingFontSize'><strong>BRANDS THAT RELY ON OUR EXPERTISE</strong></p>
          {sliderReady ? (
            <Slider {...settings}>
              <div className='p-1 centered-slide'><img src={greens} className='certificate' alt='9 Greens' /></div>
              <div className='p-1 centered-slide'><img src={captaan} className='certificate' alt='Captaan' /></div>
              <div className='p-1 centered-slide'><img src={egossmart} className='certificate' alt='Ego Smart' /></div>
              <div className='p-1 centered-slide'><img src={ryko} className='certificate' alt='Ryko' /></div>
              <div className='p-1 centered-slide'><img src={aratton} className='logoAB' alt='Aratton' /></div>
              <div className='p-1 centered-slide'><img src={electrize} className='certificate' alt='Electrize' /></div>
              <div className='p-1 centered-slide'><img src={starFast} className='certificate' alt='Star Fast' /></div>
              <div className='p-1 centered-slide'><img src={broadwell} className='logoAB' alt='Broadwell' /></div>
            </Slider>
          ) : (<div>Loading...</div>)}
        </div> */}

        {/* <div className='container p-4 mt-4'>
          <div className='row justify-content-center'>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox1Img pointerBoxHover' to='/about'>
                <p className='pointerBoxText'><strong>45000 sq feet Factory Area</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3  pointerBox2Img pointerBoxHover' to='/about'>
                <p className='pointerBoxText'><strong>TV Manufacturing Scale: 300K Units Annually</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox3Img pointerBoxHover' to='/about'>
                <p className='pointerBoxText'><strong>Fan Manufacturing Scale: 500K Units Annually</strong></p>
            </Link>
            <Link style={{ textDecoration: 'none' }} className='col-12 col-sm-6 col-lg-3 pointerBox4Img pointerBoxHover' to='/about'>
                <p className='pointerBoxText'><strong>Making Significant Contribution in EMS Industry</strong></p>
            </Link>
          </div>
        </div> */}

        <div className='container p-4 mt-4' align="center">
          <p className='headingFontSize'><strong>Recognised. Certified. Trusted.</strong></p>
            {sliderReady ? (
                <Slider {...settings}>
                  <div className='p-1 centered-slide'><img src={zed} className='certificate' alt='ZED' /></div>
                  <div className='p-1 centered-slide'><img src={iso} className='certificate' alt='ISO' /></div>
                  <div className='p-1 centered-slide'><img src={iso14001} className='certificate' alt='ISO 14001:2015' /></div>
                  <div className='p-1 centered-slide'><img src={iso50001} className='certificate' alt='ISO 50001:2018' /></div>
                  <div className='p-1 centered-slide'><img src={iso45001} className='certificate' alt='ISO 45001:2018' /></div>
                  <div className='p-1 centered-slide'><img src={tradePartners} className='certificate' alt='Trade Partners' /></div>
                  <div className='p-1 centered-slide'><img src={bis} className='certificate' alt='BIS' /></div>
                  <div className='p-1 centered-slide'><img src={panIndia} className='certificate' alt='PAN India' /></div>
                  <div className='p-1 centered-slide'><img src={bisElectronics} className='certificate' alt='BIS Electronics' /></div>
                  <div className='p-1 centered-slide'><img src={bee} className='certificate' alt='BEE' /></div>
                  <div className='p-1 centered-slide'><img src={rohs} className='certificate' alt='RoHS' /></div>
                </Slider>
              ) : (<div>Loading...</div>)}
        </div>

        <div className='container videoSection' ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <iframe className='homeVideo'  id='yt-player' src="https://www.youtube.com/embed/3YoJMTlLtns?si=yQB9NgCGJgQuqMnN&enablejsapi=1&rel=0&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
    
  )
}

export default Home
