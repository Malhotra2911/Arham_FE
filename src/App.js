import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import NewsBlogs from './components/NewsBlogs';
import AwardsRecognition from './components/AwardsRecognition';
import BoardOfDirector from './components/BoardOfDirector';
import CommitteesOfTheBoard from './components/CommitteesOfTheBoard';
import AnnualReport from './components/AnnualReport';
import ShareholderInformation from './components/ShareholderInformation';
import PoliciesCompliances from './components/PoliciesCompliances';
import CorporateAnnouncements from './components/CorporateAnnouncements';
import IntimationOutcomeOfBoardMeeting from './components/IntimationOutcomeOfBoardMeeting';
import IntimationToTheStockExchange from './components/IntimationToTheStockExchange';
import NominationForm from './components/NominationForm';
import Prospectus from './components/Prospectus';
import EWaste from './components/EWaste';
import BlogPage from './components/BlogPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home';
import InvestorRelation from './components/InvestorRelation';

import PageTracker from './components/PageTracker'
import PreferentialIssue from './components/PreferentialIssue';


function App() {
  return (
    <>
      <Router>
      <Header />
        <div className="App">
          <ScrollToTop />
          <PageTracker />
          <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route exact path="/about" element={ <About /> }></Route>
            <Route exact path="/contact" element={ <Contact /> }></Route>
            <Route exact path="/awardsRecognition" element={ <AwardsRecognition /> }></Route>
            <Route exact path="/newsBlogs" element={ <NewsBlogs /> }></Route>
            <Route exact path="/investorRelation" element={ <InvestorRelation /> }></Route>
            <Route exact path="/boardOfDirector" element={ <BoardOfDirector /> }></Route>
            <Route exact path="/committeesOfTheBoard" element={ <CommitteesOfTheBoard /> }></Route>
            <Route exact path="/annualReport" element={ <AnnualReport /> }></Route>
            <Route exact path="/shareholderInformation" element={ <ShareholderInformation /> }></Route>
            <Route exact path="/policiesCompliance" element={ <PoliciesCompliances /> }></Route>
            <Route exact path="corporateAnnouncements" element={ <CorporateAnnouncements /> }></Route>
            <Route exact path="/intimationOutcomeOfBoardMeeting" element={ <IntimationOutcomeOfBoardMeeting /> }></Route>
            <Route exact path="/intimationToTheStockExchange" element={ <IntimationToTheStockExchange /> }></Route>
            <Route exact path="/nominationForm" element={ <NominationForm /> }></Route>
            <Route exact path="/prospectus" element={ <Prospectus /> }></Route>
            <Route exact path="/preferentialIssue" element={ <PreferentialIssue /> }></Route>
            <Route exact path="/ewaste" element={ <EWaste /> }></Route>
            <Route exact path="/blogPage/:id" element={ <BlogPage /> }></Route>
          </Routes>
        </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
