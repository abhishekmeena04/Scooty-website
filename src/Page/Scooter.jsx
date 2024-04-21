import React, { useEffect } from "react";
import s1 from "../assets/image/s1.png";
import s2 from "../assets/image/s3.webp";
import s3 from "../assets/image/s1.png";
import Layout from "../components/Layout";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: s1,
    aosDelay: 0,
  },
  {
    name: "KIA UX",
    price: 140,
    image: s2,
    aosDelay: 500,
  },
  {
    name: "KIA UX",
    price: 140,
    image: s3,
    aosDelay: 500,
  },
  {
    name: "BMW UX",
    price: 100,
    image: s1,
    aosDelay: 0,
  },
  {
    name: "KIA UX",
    price: 140,
    image: s2,
    aosDelay: 500,
  },
  {
    name: "KIA UX",
    price: 140,
    image: s2,
    aosDelay: 500,
  },
];

const Scooter = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <Layout>
      <div className="pb-24">
        <div className="container">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
          >
            Lorem ipsum dolor
          </h1>
          <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
            nemo ab?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Scooter;
