import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section 
    id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">


<img
  src="Projects/heromeadow.jpg"
  className="absolute inset-0 h-full w-full object-cover 
  object-[53%_center] sm:object-center
  [mask-image:linear-gradient(to_bottom,black_50%,black_25%,transparent)] 
  [-webkit-mask-image:linear-gradient(to_bottom,black_50%,black_25%,transparent)]"
/>



        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/20 via-yellow-200/10 to-black/0" />

        {/* Optional: Extra dark overlay for readability */}

        {/* Bottom fade overlay (video fades into page bg) */}


<div className="container max-w-4xl text-left px-2 pr-25 sm:px-6 
               lg:ml-24 z-10 text-white
               translate-y-[-4rem] sm:translate-y-[-1rem] md:translate-y-0">
        <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span><br />
                <span className=" opacity-0 animate-fade-in-delay-1"> Abhinand</span>
                <span className=" ml-2 opacity-0 animate-fade-in-delay-1"> G</span>
                <span className=" block opacity-0 animate-fade-in-delay-2"> also known as</span>
                <span className=" block text-[#FA8655] opacity-0 animate-fade-in-delay-4 font-extrabold tracking-wide "> <img className="w-100 m:w-100 lg:w-100" src="Projects/logo.png" alt="aaaaa" /></span>
            </h1>
            <p className="text-lg  md:text-xl text-white max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                Just an aspiring digital artist who loves turning <br /> emotions into little stories.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button"> View My Works</a>
            </div>

        </div>
        </div>
    </section>
    );
}