import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b899e295-1b88-40bd-a75a-fa55fe6d7661");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      id="contact"
      className="about bg-gray-100 display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10 pb-20"
    >
      <div className="contact-title mb-5">
        <h1 className="text-[#373737] text-4xl font-bold">
          Get in touch
        </h1>
      </div>
      <div className="contact-section grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8">
        <div className="contact-left display: flex flex-col gap-4">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-[#373737]" data-aos="fade-down" data-aos-delay="100">
            Lets talk
          </h1>
          <p className="max-w-xl" data-aos="fade-down" data-aos-delay="200">
            We are currently available to be at your service !
          </p>
          <div className="contact-details display: flex flex-col gap-4">
          <a 
  href="mailto:support@sprintat.com" 
  className="contact-detail flex items-center gap-3 cursor-pointer" 
  data-aos="fade-down" 
  data-aos-delay="300"
>
  <i className="fa-solid fa-envelope"></i>
  <p>support@sprintat.com</p>
</a>

            
            <div className="contact-detail display: flex items-center gap-3" data-aos="fade-down" data-aos-delay="400">
              <i class="fa-brands fa-instagram"></i>{" "}
              <a href="https://www.instagram.com/spri.ntat/" target="blank" rel="noopener noreferrer">
                Sprintat
              </a>
            </div>
            <div className="contact-detail display: flex items-center gap-3" data-aos="fade-down" data-aos-delay="400">
              <i class="fa-brands fa-twitter"></i>{" "}
              <a href="https://x.com/Sprintat272793" target="blank" rel="noopener noreferrer">
                Sprintat
              </a>
            </div>
            
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-right display: flex flex-col items-start gap-4"
        >
          <label htmlFor="" className="text-gray-700" data-aos="fade-up" data-aos-delay="100">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="bg-white p-2 text-black rounded-lg border-none	outline-none min-w-80"
            data-aos="fade-up" data-aos-delay="100"
          />
          <label htmlFor="" className="text-gray-700" data-aos="fade-up" data-aos-delay="200">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="bg-white  p-2 rounded-lg text-black border-none	outline-none min-w-80"
            data-aos="fade-up" data-aos-delay="200"
          />
          <label htmlFor="" className="text-gray-700" data-aos="fade-up" data-aos-delay="300">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="border-none	outline-none rounded-xl p-2 text-black bg-white  min-w-80"
            data-aos="fade-up" data-aos-delay="300"
          ></textarea>
          <button
            type="submit"
            className="contact-submit border border-[#373737] rounded-3xl text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl py-1 px-3 text-[#373737] hover:bg-[#373737] hover:text-white"
            data-aos="fade-up" data-aos-delay="400"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
