import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { BsInstagram, BsReddit, BsYoutube } from "react-icons/bs";
import { CgInstagram, CgYoutube } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaDeviantart } from "react-icons/fa";
import { PiPinterestLogo, PiPinterestLogoDuotone, PiPinterestLogoFill } from "react-icons/pi";
import { useState,useRef, useEffect } from "react";
import toast from "react-hot-toast";




export const ContactSection =() =>{



        const [submittedOnce, setSubmittedOnce] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
    
    
     
    
    
    
      const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      details: "",
    });
    
    const [errors, setErrors] = useState({});
    
    function validate(values) {
      const newErrors = {};
    
      if (!values.name.trim()) newErrors.name = "Please enter your name.";
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email.trim()) newErrors.email = "Please enter your email.";
      else if (!emailRegex.test(values.email))
        newErrors.email = "Please enter a valid email address.";
    
      const phoneDigits = values.phone.replace(/\D/g, "");
      if (!values.phone.trim()) newErrors.phone = "Please enter your phone number.";
      else if (phoneDigits.length !== 10)
        newErrors.phone = "Phone number must be exactly 10 digits.";
    
      if (!values.details.trim())
        newErrors.details = "Please enter project details.";
      else if (values.details.trim().length < 10)
        newErrors.details = "Project details must be at least 10 characters.";
    
      return newErrors;
    }
    
    function handleChange(e) {
      const { name, value } = e.target;
    
      setForm((prev) => ({
        ...prev,
        [name]: name === "phone" ? value.replace(/[^\d]/g, "") : value,
      }));
    
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    
    async function onSubmit(e) {
      e.preventDefault();
    
      const newErrors = validate(form);
      setErrors(newErrors);
    
      if (Object.keys(newErrors).length > 0) {
        toast.error("Please fix the form errors");
        return;
      }
    
      setSubmittedOnce(true);
      toast.loading("Submitting...", { id: "consultation-toast" });
    
      try {
        const res = await fetch("https://formsubmit.co/ajax/lazygraphite@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
    
        if (data.success === "true") {
      toast.success("Request submitted successfully", {
        id: "consultation-toast",
      });
    
      setForm({
        name: "",
        email: "",
        phone: "",
        details: "",
      });
    
      setShowSuccess(true);
    
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); 
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        toast.error("Something went wrong. Try again", {
          id: "consultation-toast",
        });
      }
    
      setSubmittedOnce(false);
    }
    





    return <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-primary"> 
                Me
            </span>
        </h2>

        {/* CONSULTATION FORM SECTION */}
<section className="pb-10 pt-5">
  <div className="container mx-auto" id="consultation">
    <div className="rounded-lg border border-foreground  p-8 sm:p-10 shadow-sm">
      <h3 className="text-3xl font-semibold tracking-tight text-foreground">
        Commission Requests
      </h3>
      <p className="mt-3  text-md text-foreground">
        Share your details and project requirements — I’ll get back to you shortly.
      </p>

  

      <form
  onSubmit={onSubmit}
  className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
        {/* IMPORTANT: replace YOUR_FORM_ID here too */}
        
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-medium text-left text-foreground">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`rounded-lg border px-4 py-3 text-foreground  outline-none transition 
              ${errors.name ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--formtext))]/70`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground text-left">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={`rounded-lg border px-4 py-3 bg-[rgb(var(--bg))]/60 text-foreground outline-none transition
              ${errors.email ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground text-left">
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
            maxLength={10}
            className={`rounded-lg border px-4 py-3 bg-[rgb(var(--bg))]/60 text-foreground outline-none transition
              ${errors.phone ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label className="text-sm font-medium text-foreground text-left">
            Project Details
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Tell me about your project....."
            rows={5}
            className={`rounded-lg border px-4 py-3 
   text-foreground 
  outline-none transition resize-none
  ${errors.details ? "border-red-500/60" : "border-foreground"}
  focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.details ? (
            <p className="text-sm text-red-500">{errors.details}</p>
          ) : (
            <p className="text-sm text-[rgb(var(--text))]/50 text-left">
              Minimum 10 characters
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="lg:col-span-2 flex flex-col gap-3 items-start">



          <button  
  className="cosmic-button"
  disabled={submittedOnce}
>
  {submittedOnce ? "Submitting..." : "Submit Request"}
</button>

{showSuccess && (
  <p className="text-sm font-medium text-green-600">
    Your message has been sent successfully. We’ll contact you shortly.
  </p>
)}


          

        </div>
      </form>
    </div>
  </div>
</section>


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