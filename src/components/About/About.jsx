import React from "react";
import CarPng from "../../assets/image/s5.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 sm:w-[800px] md:w-[600px]  "
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Wroley Electric Scooter, where innovation meets
                sustainability in the heart of Delhi. Our electric scooters
                redefine urban commuting with cutting-edge technology and
                eco-friendly design. Experience the thrill of emission-free
                rides, contributing to a cleaner and greener cityscape. At
                Wroley Electric Scooter, we prioritize efficiency without
                compromising style, ensuring a seamless blend of performance and
                aesthetics.
              </p>
              <p data-aos="fade-up">
                Say goodbye to fuel costs and high maintenance expenses—our
                scooters offer a cost-effective and eco-conscious solution for
                daily travel. As advocates of green living, we proudly support
                government incentives for electric vehicles, making your choice
                not only environmentally responsible but economically rewarding.
                Visit our showroom to test ride the future of urban mobility
                with Wroley Electric Scooter. Join us on the journey to a
                sustainable and smarter Delhi.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
