import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import { BannerData1  } from "./mockData/bannerData";
import { BannerData2  } from "./mockData/bannerData"; 
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner/>
      <Hero/>
      <NumberCounter/>
      <WhyChooseUs/>
      <Banner {...BannerData1}/>
      <Banner {...BannerData2} reverse={true}/>
      <SubjectCard/>
      <Testimonial/>
      <Footer/>
    </main>
  );
};

export default App;
