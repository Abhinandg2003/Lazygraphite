import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { BsInstagram, BsReddit, BsYoutube } from "react-icons/bs";
import { CgInstagram, CgYoutube } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaDeviantart } from "react-icons/fa";
import { PiPinterestLogo, PiPinterestLogoDuotone, PiPinterestLogoFill } from "react-icons/pi";


export const ContactSection =() =>{





    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-primary"> 
                Me
            </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Are you trying get in touch with me? Feel free to reach out, I'm always interested in new opportunities.

        </p>

        <div className="items-center">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information
                    
                </h3>



                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className= "h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:lazygraphite@gmail.com" 
                            target = "_blank"
                            className="text-muted-foreground hover:text-primary transition-colors">lazygraphite@gmail.com</a>
                        </div>

                    </div>

                </div>

                <div className="pt-8">
                    <h4 className="mb-4">
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.instagram.com/lazy_graphite?igsh=MTdibHc4aHF2b2d1Zg=="
                        target="_blank"
                        className="hover:text-primary text-2xl">
                            <BsInstagram />
                        </a>

                        <a href="https://pin.it/5cCpmaiCe"
                        target="_blank"
                        className="hover:text-primary text-2xl">
                            <PiPinterestLogoFill />
                        </a>

                        <a href="https://www.reddit.com/u/Lazygraphite/s/noSic1Y9yT"
                        target="_blank"
                        className="hover:text-primary text-2xl">
                            <BsReddit />
                        </a>

                         <a href="https://www.deviantart.com/lazygraphite"
                        target="_blank"
                        className="hover:text-primary text-2xl">
                            <FaDeviantart />
                        </a>
                        

                        
                         <a href="https://www.youtube.com/@Lazygraphite"
                        target="_blank"
                        className="hover:text-primary text-2xl">
                            <BsYoutube />
                        </a>

                    </div>
                    
                </div>

            </div>
        </div>
        </div>

    </section>;
}