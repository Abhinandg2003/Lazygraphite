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


export const Home = () =>{
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
        <ProjectsSection/> 
        <PosterssSection/>
        <ContactSection />
       </main>


       {/*Footer */}

       <Footer/>
    </div>;
}