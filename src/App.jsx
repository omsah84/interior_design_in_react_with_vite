
import Header from "./component/Header";
import Home from "./component/Home";
import ChooseUs from "./component/ChooseUs";
import HomeSpaceInterior from "./component/HomeSpaceInterior";
import CounterBanner from "./component/CounterBanner";
import Banner from "./component/Banner";
import SlickBanner from "./component/SlickBanner";
import Testimonial from "./component/Testimonial";
import PriceEstimator from "./component/PriceEstimator";
import Offerings from "./component/Offerings";
import DownloadBanner from "./component/DownloadBanner";
import HowItWork from "./component/HowItWork"
import ConnectWithUs from "./component/ConnectWithUs";
import NewsSection from "./component/NewsSection";
import ContactUs from "./component/ContactUs";
import PromotionalBanner from "./component/PromotionalBanner";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <Header />
      <Home />
      <ChooseUs />
      <HomeSpaceInterior/>
      <CounterBanner />
      <Banner />
      <SlickBanner />
      <Testimonial />
      <PriceEstimator />
      <Offerings />
      <DownloadBanner />
      <HowItWork/>
      <ConnectWithUs/>
      <NewsSection/>
      <ContactUs/>
      <PromotionalBanner/>
      <Footer/>
    </>
  );
}

export default App;
