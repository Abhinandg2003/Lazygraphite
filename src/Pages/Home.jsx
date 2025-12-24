import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import {AuroraBackground} from "../components/AuroraBackground";
import { CloudBackground } from "../components/CloudBackground";
import { PosterssSection } from "../components/PostersSection";
import { JourneySection } from "../components/JourneySection";
import { MyProcessSection } from "../components/MyProcessSection";
import { ShopSection } from "../components/ShopSection";
import { useEffect, useState } from "react";






export const Home = () =>{

    useEffect(() => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    localStorage.setItem("theme", prefersDark ? "dark" : "light");
  }
}, []);


    return<div className="min-h-screen  scene text-foreground overflow-x-hidden">
       {/*Theme Toggle */}
       
       {/*Background Effects */}
       <AuroraBackground />
       <CloudBackground /> 
       <StarBackground />
       {/*Navabar */}
       <Navbar/>
       {/* <ThemeToggle/> */}

       {/*Main Content */}

       <main>
        <HeroSection/>
        <AboutSection/>  
        <JourneySection/>
        <ProjectsSection/> 
        <MyProcessSection/>
        {/* <PosterssSection/> */}
        <ShopSection/>
        <ContactSection />
       </main>


       {/*Footer */}

       <Footer/>
    </div>;
}