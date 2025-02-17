import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

const FadeInSection = ({ children, direction = 'left' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView)
    });

    return (
        <div
            ref={ref}
            className={`fadeIn${direction === 'left' ? 'Left' : 'Right'} ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default function Landing() {
    return (
        <>
            <TopNavbar />
            <FadeInSection direction="left">
                <Header />
            </FadeInSection>
            <FadeInSection direction="left">
                <Services />
            </FadeInSection>
            <FadeInSection direction="right">
                <Blog />
            </FadeInSection>
            <FadeInSection direction="left">
                <Pricing />
            </FadeInSection>
            <FadeInSection direction="right">
                <Projects />
            </FadeInSection>
            <FadeInSection direction="left">
                <Contact />
            </FadeInSection>
            <Footer />
        </>
    );
}
