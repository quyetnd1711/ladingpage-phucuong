import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingContact from './components/Layout/FloatingContact';
import SnowEffect from './components/Effects/SnowEffect';
import HeroSlider from './components/Hero/HeroSlider';
import FeaturedDishes from './components/Sections/FeaturedDishes';
import BookingForm from './components/Sections/BookingForm';
import Gallery from './components/Sections/Gallery';
import Reviews from './components/Sections/Reviews';
import About from './components/Sections/About';
import Location from './components/Sections/Location';
import FAQ from './components/Sections/FAQ';

function App() {
  return (
    <div className="App">
      {/* Christmas Snow Effect */}
      <SnowEffect />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="home">
        <HeroSlider />
        <FeaturedDishes />
        <About />
        <Gallery />
        <Reviews />
        <BookingForm />
        <Location />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Icons */}
      <FloatingContact />
    </div>
  );
}

export default App;
