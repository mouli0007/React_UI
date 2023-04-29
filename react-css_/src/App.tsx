import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FeaturedTours from "./Components/FeaturedTours";
import Footer from "./Components/Footer";
import Galerry from "./Components/Galerry";
import Header from "./Components/Header";
import Services from "./Components/Services";
const App = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <FeaturedTours />
      <Contact />
      <Galerry />
      <Footer />
    </>
  );
};

export default App;
