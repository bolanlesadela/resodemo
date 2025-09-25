import ButtonGraident from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import ResoBridgePilot from "./components/Carousel";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoTutorial from "./components/VideoTutorial";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <ResoBridgePilot />
      <Pricing />
      <VideoTutorial />
      <Form />
      <Footer />
      </div>
      <ButtonGraident />
    </>
  );
};

export default App;
