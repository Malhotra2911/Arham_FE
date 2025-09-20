import React, { useState } from 'react'
import '../css/NewsBlogs.css'
import evMarket from '../assets/ev-market.jpg'
import stock from '../assets/stock.jpg'
import partnership from '../assets/partnership.jpg'
import starshineByArham from '../assets/starshineByArham.jpg'
import IPO from '../assets/IPO.jpg'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog5 from '../assets/blog5.jpg'
import raipurMunicipalCorporation from '../assets/RaipurMunicipalCorporation.jpg'
import bonus from '../assets/image2equitymaster.jpg'
import { Link } from 'react-router-dom'

const NewsBlogs = () => {
  const blogData = [
    {
        id: 1,
        title: 'Made in India, Made for India: The Starshine Promise',
        description: 'In a market full of international names, Starshine stands tall as a truly Indian brand that designs, develops, and manufactures right here in India.',
        image: blog5,
        date: '',
        link: ''
    },
    {
        id: 2,
        title: 'The Journey Behind Every Starshine Product: Powered by Arham Technologies',
        description: 'What makes a Starshine product so dependable? The answer lies in the backbone of the brand: Arham Technologies Limited. As a public listed company with deep roots in electronics manufacturing, Arham ensures every product is more than just a machine—it’s a promise.',
        image: blog3,
        date: '',
        link: ''
    },
    {
        id: 3,
        title: '5 Reasons Starshine Appliances Are Perfect for Young Indian Families',
        description: 'Managing a household today is no small feat, especially for young Indian couples juggling work, kids, and daily chores. What makes a real difference is having reliable home appliances that simplify life. That’s where Starshine steps in.',
        image: blog2,
        date: '',
        link: ''
    },
    {
        id: 4,
        title: 'Why More Families Are Choosing Starshine for Their First Smart TV?',
        description: 'Buying your first Smart TV is more than just a purchase—it’s a moment of pride, joy, and excitement for every Indian family. Whether you’re moving into a new home, upgrading from a basic LED, or gifting it to your parents, the experience should be memorable and satisfying. That’s why more and more families are placing their trust in Starshine.',
        image: blog1,
        date: '',
        link: ''
    },
    {
        id: 5,
        title: '‘Starshine by Arham Technologies’; A Brand Bringing Innovation Directly to Home!',
        description: 'September 27: In the age of electronics and Information Technology, Arham Technologies, based in New Raipur, Chhattisgarh, is a renowned television manufacturing company with a modernized as well as an innovative approach in India. Especially in the trending phase of Smart TVs and evolutionary technologies making inroads across India, Arham Technologies, an established has redefined the manufacturing and marketing process of Smart TVs for the end-users., Arham Technologies has been a leading consumer electronics brand as well as manufacturer of Smart Televisions in Central India since 2019 in their highly modernized manufacturing unit located in New Raipur, Chhattisgarh.',
        image: starshineByArham,
        date: '27/09/2022',
        link: 'https://www.ahmedabadmirror.com/starshine-by-arham-technologies-a-brand-bringing-innovation-directly-to-home/81845274.html#goog_rewarded'
    },
    {
        id: 6,
        title: 'Arham Technologies IPO GMP, Date, Price, Review, Allotment',
        description: 'Arham Technologies IPO date is fixed, The IPO will open on December 5 and will close on December 7, 2022. Arham Technologies is a NSE SME IPO to raise ₹9.58 crores via IPO. The Arham Technologies IPO price band is fixed at ₹42 with a market lot of 3000 shares. Arham Technologies Limited is a leading smart television manufacturer in India. The company produces smart tv under the “STARSHINE” brand. They are also the manufacturer of Fans, Air Coolers, and Mixer Grinders through third-party manufacturers. Arham Technologies serves brands as an original equipment manufacturer (OEM) business model for LED tv. They are procuring products from domestic suppliers in India. The company is serving 20+ areas with having 1-acre facility area and 9+ years of experience.',
        image: IPO,
        date: '15/12/2022',
        link: 'https://ipowatch.in/arham-technologies-ipo-gmp-date-price-review-allotment/'
    },
    {
        id: 7,
        title: 'Arham Technologies Entered Into An "Android Compatibility Commitment" With Google Llc',
        description: 'Entered into an "Android Compatibility Commitment" with Google LLC Will launch latest technology in Google TV under brand Starshine',
        image: partnership,
        date: '04/04/2023',
        link: 'https://www.tradingview.com/news/reuters.com,2023:newsml_FWN367163:0-arham-technologies-entered-into-an-android-compatibility-commitment-with-google-llc/'
    },
    
    {
        id: 8,
        title: 'Stock hits 5% upper circuit after company’s board announces 1:1 bonus issue',
        description: 'Shares of this multibagger stock under the micro-cap category hit 5 percent upper circuit on Friday after the company’s Board of Directors, in its meeting recently approved the issuance of Bonus equity shares as well as fundraising plans. With a market capitalization of Rs 166.79 crores, the stocks of Arham Technologies Limited opened their trading hour on Friday at Rs 187.80 and currently are locked in the 5 percent upper circuit recorded at Rs 197.15 apiece.Such bullish stock price movements were observed after the company, through a recent regulatory filing with the Bombay Stock Exchange (BSE), intimated regarding the outcome of the meeting of the company’s Board of Directors held on 14th March 2024. The Board considered and approved the recommendation of issuance of fully paid-up Bonus shares in the ratio ‘1:1’, i.e., one equity share for every one fully paid-up equity share of Rs 10 each held, subject to the approval of the shareholders of the Company and appropriate authorities. The record date for the same is yet to be determined. Moreover, the company’s Board, subject to the shareholder’s approval, also approved the raising of funds by way of Issuance of equity shares through further public offer (FPO) up to Rs 60 crores. As per the recent half-yearly data, the company’s basic business parameters, viz, its operating revenues as well as after-tax profits, showed some flat movements in opposing directions.',
        image: stock,
        date: '15/03/2024',
        link: 'https://tradebrains.in/features/stock-hits-5-upper-circuit-after-companys-board-announces-11-bonus-issue/'
    },
    {
        id: 9,
        title: '5 Stocks to Watch Out for Bonus Shares and Stock Splits in May 2024',
        description: 'The Q4 earnings season is in full swing, with companies unveiling their financial results. But this year, there’s more to the story than just the bottom line. With geopolitical tensions and a volatile market creating uncertainty, investors are hungry for ways to boost their returns. That’s where corporate actions, like bonus shares and stock splits, come into play. Bonus shares and stock splits are exciting events for investors because they have a material impact on the company’s stock price. Both mechanisms serve as potent tools to bolster shareholder confidence, stimulate trading activity, and maintain an equitable distribution of wealth.',
        image: bonus,
        date: '26/04/2024',
        link: 'https://www.equitymaster.com/detail.asp?date=04/26/2024&story=7&title=5-Stocks-to-Watch-Out-for-Bonus-Shares-and-Stock-Splits-in-May-2024'
    },
    {
        id: 10,
        title: 'Raipur’s startup revolution begins',
        description: 'CHHATTISGARH : Earlier this year, Raipur Municipal Corporation (RMC) launched two initiatives— Aarambh and Innov8 — to revolutionise the capital’s startup ecosystem and significantly boost employment opportunities in the region. Aarambh signifies an ‘affirmative start for beginners,’ while Innov8 implies to ‘make good changes introducing new ideas or products’. The RMC is possibly the first urban local body in the tier-2 city category to have actively supported the startup ecosystem with a vision going beyond its customary roles. The initiative conceived by the corporation is rooted in the spirit of the ‘Startup India’ campaign.',
        image: "https://media.newindianexpress.com/newindianexpress%2F2024-10-19%2F4z5dod1z%2FRaipur%E2%80%99s-Startup.jpg?rect=0%2C20%2C653%2C367&w=1024&auto=format%2Ccompress&fit=max",
        date: '20/10/2024',
        link: 'https://www.newindianexpress.com/thesundaystandard/2024/Oct/20/raipurs-startup-revolution-begins'
    },
    {
        id: 11,
        title: 'Raipur is Emerging as Chhattisgarh’s Thriving Startup Ecosystem',
        description: 'Chhattisgarh capital Raipur is quietly undergoing a transformation and sure to position itself as a major player in India’s startup ecosystem. Raipur Municipal Corporation (RMC) has come up with two key initiatives and these are Aarambh and Innov8. The initiatives are paving the path for innovation, entrepreneurship and job creation. It signals a good shift in the city’s economic narrative. Raipur is a tier-2 city and its decision to back startup ecosystem is significant. Municipal bodies are traditionally seen as handling core services like waste management and public utilities. The RMC has set an example for how local governance can fuel entrepreneurial energy and create sustainable economic opportunities.',
        image: raipurMunicipalCorporation,
        date: '21/10/2024',
        link: 'https://www.techiexpert.com/raipur-is-emerging-as-chhattisgarhs-thriving-startup-ecosystem/'
    },
    {
        id: 12,
        title: 'Arham Technologies taps into EV market with new dedicated subsidiary',
        description: 'As per the regulatory filings on NSE, dated 19th January, Arham Technologies ltd is entering into Electric Vehicles segment with its newly incorporated subsidiary company. It indeed sounds like an interesting strategic move by Arham Technologies Ltd to enter the Electric Vehicles (EV) segment, especially considering the growing interest and demand for electric mobility solutions worldwide. By establishing a subsidiary company dedicated to this sector Arham Technologies Ltd is likely aiming to capitalize on the burgeoning market for electric two-wheelers and three-wheelers with innovation & profitability. By diversifying its business into EVs, Arham Technologies Ltd can tap into the increasing demand for sustainable transportation solutions driven by environmental concerns and regulatory mandates worldwide. Entering into both the two-wheeler and three-wheeler segments allows Arham Technologies Ltd to target different market segments and diversify its offerings within the EV space. Two-wheelers are particularly popular in urban areas for personal transportation, while three-wheelers are often used for commercial purposes such as last-mile delivery and passenger transport in densely populated areas.',
        image: evMarket,
        date: '10/02/2024',
        link: 'https://www.moneycontrol.com/news/brand-connect/arham-technologies-taps-into-ev-market-with-new-dedicated-subsidiary-12224581.html'
    },
    {
        id: 13,
        title: 'Arham Technologies Bonus Share: एक साल में 273% रिटर्न, अब 1:1 के रेशियो में बोनस शेयर का ऐलान',
        description: 'Arham Technologies Bonus Share: SME सेक्टर की कंपनी Arham Technologies Limited अपने शेयरधारकों को बोनस शेयर देने जा रही है। कंपनी की 14 मार्च को हुई मीटिंग में यह फैसला लिया गया। Arham Technologies ने शेयर बाजारों को बताया कि कंपनी के बोर्ड ने 1:1 के अनुपात में बोनस शेयर देने की सिफारिश की है। इसके तहत शेयरधारकों को 10 रुपये फेस वैल्यू के मौजूदा 1 फुली पेड अप इक्विटी शेयर पर 1 शेयर, बोनस के तौर पर मिलेगा। इस सिफारिश पर अभी कंपनी के शेयरधारकों और रेगुलेटर्स से मंजूरियां लिया जाना बाकी है।',
        image: "https://images.moneycontrol.com/static-hindinews/2024/03/arham-580x435.jpg?impolicy=website&width=770&height=431",
        date: '16/03/2024',
        link: 'https://hindi.moneycontrol.com/news/markets/arham-technologies-stock-has-given-273-percent-return-in-one-year-now-announced-bonus-share-1853301.html'
    },
    {
        id: 14,
        title: 'This Timely policy support will drive growth- Ankit Jain, Executive Director of Arham Technologies on GST reforms.',
        description: 'The rate cut on TV will improve cost efficiencies, boost domestic value addition and allow manufacturers to pass on benefits to customers, Ankit Jain, CFO and executive director, Arham Technologies Ltd, said. This timely policy support, which comes ahead of the Diwali season, will drive growth, innovation and job creation in the electronics sector, he said.',
        image: "https://images.moneycontrol.com/static-mcnews/2025/08/20250819093402_air-conditioner.jpg?impolicy=website&width=770&height=431",
        date: '04/09/2025',
        link: 'https://www.moneycontrol.com/technology/dixon-amber-other-ems-firms-hail-gst-cut-for-tvs-acs-says-will-boost-demand-manufacturing-article-13519798.html'
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  }

  const filtered = (dataArray) => {
    return dataArray.filter(data => data.title.toLowerCase().includes(searchQuery) || data.description.toLowerCase().includes(searchQuery));
  }
  
  return (
    <div>
      <section className='newsBlogsPart1'>
        <h1 style={{textAlign: "left", marginTop: "20vh"}}><strong>News & Blogs</strong></h1>
      </section>

      <section className='newsBlogsPart2 container'>
        <div className='row'>
            <div className='p-3'>
                <div className="blogSearch p-2 d-block d-md-none">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search News & Blogs" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                    {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
            <div className='col-lg-8' align='center'>
                <div className='row'>
                    {filtered(blogData).slice().sort((a, b) => b.id - a.id).map((blog) => {
                        return (
                            <div className='col-md-6 col-lg-6 p-4' key={blog.id}>
                                <div className="card blogCard">
                                    <img src={blog.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        {blog.date ? (<p className='text-muted'>Date: {blog.date}</p>) : ""}
                                        <h3 className="card-title"><strong>{blog.title}</strong></h3>
                                        {/* <p className={`card-text ${!isExpanded ? 'blogText' : ''}`}>{blog.description}</p> */}
                                        <p className='card-text blogText'>{blog.description}</p>
                                        {blog.link ? (<Link to={blog.link} target='_blank' type='button' className="btn btn-outline-danger">Read More</Link>) : (<Link to={`/blogPage/${blog.id}`} target='_blank' type='button' className="btn btn-outline-danger">Read More</Link>)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='col-lg-4 p-4 d-none d-lg-block'>
                <div className="container-fluid blogSearch p-3">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search News & Blogs" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                    {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}
                    </form>
                </div>
                <br />
                <div className='container-fluid blogSearch'>
                    <h3 className='p-3'><strong>Latest Posts</strong></h3>
                    {blogData.slice().sort((a, b) => b.id - a.id).slice(0, 5).map((blog) => (
                        <div className='p-2' key={blog.id}>
                            <div className='row'>
                            <div className='col-lg-4'>
                                <img src={blog.image} className='latestPostImage' alt='...' />
                            </div>
                            <div className='col-lg-8'>
                                <span><strong>{blog.title}</strong></span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default NewsBlogs