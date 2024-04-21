import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <>
        <div
          id="about"
          className=" flex items-center justify-center md:flex-row flex-col dark:bg-black dark:text-white overflow-hidden mt-16"
        >
          <div className="max-w-7xl ">
            <div className="  pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-1" />
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold dark:text-white text-black sm:text-3xl md:text-4xl">
                    About me
                  </h2>
                  <p className="">
                    Welcome to Wroley Electric Scooter, where innovation meets
                    sustainability in the heart of Delhi. Our electric scooters
                    redefine urban commuting with cutting-edge technology and
                    eco-friendly design. Experience the thrill of emission-free
                    rides, contributing to a cleaner and greener cityscape. At
                    Wroley Electric Scooter, we prioritize efficiency without
                    compromising style, ensuring a seamless blend of performance
                    and aesthetics. Say goodbye to fuel costs and high
                    maintenance expenses—our scooters offer a cost-effective and
                    eco-conscious solution for daily travel. As advocates of
                    green living, we proudly support government incentives for
                    electric vehicles, making your choice not only
                    environmentally responsible but economically rewarding.
                    Visit our showroom to test ride the future of urban mobility
                    with Wroley Electric Scooter. Join us on the journey to a
                    sustainable and smarter Delhi.
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="">
            <img
              className="w-[340px] md:w-[400px] md:h-[300px] rounded-lg"
              src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
