import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactUs from "./component/ContactUs";
import AboutUs from "./pages/AboutUs.jsx";
// import DesignIdeas from "./pages/DesignIdeas.jsx";
import TermsPolicy from "./pages/TermsPolicy.jsx";

import TopHeader from "./component/TopHeader";
import Header from "./component/Header";
import Home from "./component/Home";
import ChooseUs from "./component/ChooseUs";
import HomeSpaceInterior from "./component/HomeSpaceInterior";
import CounterBanner from "./component/CounterBanner";
import Banner from "./component/Banner";
import HomeOffice from "./component/SliderFormater";
import LivingRoom from "./component/SliderFormater";
import BedRoom from "./component/SliderFormater";
import Kitchen from "./component/SliderFormater";
import DiningRoom from "./component/SliderFormater";
import OutdoorSpace from "./component/SliderFormater";
import Testimonial from "./component/Testimonial";
import PriceEstimator from "./component/PriceEstimator";
import Offerings from "./component/Offerings";
import DownloadBanner from "./component/DownloadBanner";
import HowItWork from "./component/HowItWork";
import ConnectWithUs from "./component/ConnectWithUs";
import NewsSection from "./component/NewsSection";
import PromotionalBanner from "./component/PromotionalBanner";
import Footer from "./component/Footer";
import MessageIcon from "./component/MessageIcon";
import NavBar from "./component/Navbar";

import { homeofficesliders } from "./data/HomeOffice.js";
import { livingroomsliders } from "./data/LivingRoom.js";
import { kitchensliders } from "./data/Kitchen.js";
import { outdoorspacesliders } from "./data/OutdoorSpace.js";
import { bedroomsliders } from "./data/BedRoom.js";
import { diningroomsliders } from "./data/DiningRoom.js";
// import DesignIdeas from "./pages/DesignIdeas.jsx";

function DesignComponent() {
  return (
    <>
      <HomeOffice
        slides={homeofficesliders}
        heading="Home Office to Match Every Style"
        subheading="Explore productive and creative spaces tailored to your needs."
      />
      <LivingRoom
        slides={livingroomsliders}
        heading="Living Room to Match Every Style"
        subheading="Discover elegant and cozy designs for your gathering spaces."
      />
      <BedRoom
        slides={bedroomsliders}
        heading="Bedroom to Match Every Style"
        subheading="Create your serene retreat with our stylish bedroom designs."
      />
      <Kitchen
        slides={kitchensliders}
        heading="Kitchen to Match Every Style"
        subheading="Transform your culinary space with modern and functional designs."
      />
      <DiningRoom
        slides={diningroomsliders}
        heading="Dining Room to Match Every Style"
        subheading="Enjoy delightful dining experiences in beautifully designed spaces."
      />
      <OutdoorSpace
        slides={outdoorspacesliders}
        heading="Outdoor Space to Match Every Style"
        subheading="Enhance your outdoor areas for relaxation and entertainment."
      />
    </>
  );
}

function HomePage() {
  return (
    <>
      <ChooseUs />
      <HomeSpaceInterior />
      <CounterBanner />
      <Banner />
      <DesignComponent />
      <Testimonial />
      <PriceEstimator />
      <Offerings />
      <DownloadBanner />
      <HowItWork />
      <ConnectWithUs />
      <NewsSection />
      <PromotionalBanner />
    </>
  );
}

function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <NavBar />
      <Home />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/design-ideas"
          element={
            <>
              <DesignComponent />
            </>
          }
        />
        <Route path="/home-office-designs" element={<DesignComponent />} />
        <Route path="/living-room-designs" element={<DesignComponent />} />
        <Route path="/bed-room-designs" element={<DesignComponent />} />
        <Route path="/kitchen-room-designs" element={<DesignComponent />} />
        <Route path="/dining-room-designs" element={<DesignComponent />} />
        <Route path="/outdoor=designs" element={<DesignComponent />} />
        <Route path="/terms-&-policy" element={<TermsPolicy />} />
      </Routes>

      <Footer />
      <MessageIcon />
    </Router>
  );
}

export default App;
