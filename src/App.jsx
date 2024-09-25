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
import ContactUs from "./component/ContactUs";
import PromotionalBanner from "./component/PromotionalBanner";
import Footer from "./component/Footer";
import MessageIcon from "./component/MessageIcon";
// import NavBar from "./component/Navbar";

import img from "./assets/Royal.jpg";
import Classic from "./assets/Classic Indian Bedroom.jpg";
import Contemporary from "./assets/Contemporary & Classy 4 BHK.jpg";
import Monochromatic from "./assets/Monochromatic Grey 2 BHK.jpg";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      {/* <NavBar /> */}
      <Home />
      <ChooseUs />
      <HomeSpaceInterior />
      <CounterBanner />
      <Banner />
      <HomeOffice
        slides={slides}
        heading="Home Office to Match Every Style"
        subheading="Explore productive and creative spaces tailored to your needs."
      />
      <LivingRoom
        slides={slides}
        heading="Living Room to Match Every Style"
        subheading="Discover elegant and cozy designs for your gathering spaces."
      />
      <BedRoom
        slides={slides}
        heading="Bedroom to Match Every Style"
        subheading="Create your serene retreat with our stylish bedroom designs."
      />
      <Kitchen
        slides={slides}
        heading="Kitchen to Match Every Style"
        subheading="Transform your culinary space with modern and functional designs."
      />
      <DiningRoom
        slides={slides}
        heading="Dining Room to Match Every Style"
        subheading="Enjoy delightful dining experiences in beautifully designed spaces."
      />
      <OutdoorSpace
        slides={slides}
        heading="Outdoor Space to Match Every Style"
        subheading="Enhance your outdoor areas for relaxation and entertainment."
      />

      <Testimonial />
      <PriceEstimator />
      <Offerings />
      <DownloadBanner />
      <HowItWork />
      <ConnectWithUs />
      <NewsSection />
      <ContactUs />
      <PromotionalBanner />
      <Footer />
      <MessageIcon />
    </>
  );
}

export default App;

// Slide data
const slides = [
  {
    image: img,
    title: "Royal & Elegant 3 BHK",
    description: "Add refinement and sophistication to your home.",
  },
  {
    image: Monochromatic,
    title: "Monochromatic Grey 2 BHK",
    description: "Add the cloudy hues to your space.",
  },
  {
    image: Contemporary,
    title: "Contemporary & Classy 4 BHK",
    description: "Classic and cosmopolitan designs.",
  },
  {
    image: Classic,
    title: "Classic Indian Bedroom",
    description: "Bring in traditional elegance to your bedroom.",
  },
];
