// import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import galleryImg from "./components/Gallery/galleryImg";
import Brands from "./components/Brands/Brands";
import SliderTop from "./components/SliderTop";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews";
import WeWork from "./components/WeWork";
import SliderBottom from "./components/SliderBottom";
import Warranty from "./components/Warranty";
import Footer from "./components/Footer";
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Gallery galleryImg={galleryImg} />
      <Brands />
      <SliderTop />
      <Advantages />
      <Reviews />
      <WeWork />
      <SliderBottom />
      <Warranty />
      <Footer />
    </Container>
  );
};

export default App;
