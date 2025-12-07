import React, { useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FloatingContact from '../Layout/FloatingContact';
import HeroSlider from '../Hero/HeroSlider';
import FeaturedDishes from '../Sections/FeaturedDishes';
import BookingForm from '../Sections/BookingForm';
import Gallery from '../Sections/Gallery';
import Reviews from '../Sections/Reviews';
import About from '../Sections/About';
import Location from '../Sections/Location';
import FAQ from '../Sections/FAQ';

const HomePage: React.FC = () => {
    useEffect(() => {
        // Check if URL has #booking hash
        if (window.location.hash === '#booking') {
            setTimeout(() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Wait for page to fully render
        }
    }, []);

    return (
        <>
            <Header />
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
            <Footer />
            <FloatingContact />
        </>
    );
};

export default HomePage;
