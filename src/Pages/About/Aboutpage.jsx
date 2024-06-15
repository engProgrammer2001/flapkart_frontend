import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Aboutpage.css';

const Aboutpage = () => {
  const [Conunter, setCounter] = useState(false);

  return (
    <div>
      <div className="lg:py-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-900">
          About Flafkart
        </h1>
      </div>
      <div className="lg:w-[80%] mx-auto items-center lg:my-8">
        <div className="p-5">
          <img
            src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg"
            alt=""
          />
        </div>
        <div className="p-5 w-full lg:my-20 m-auto">
          <div>
            <h1 className="text-2xl text-gray-600 font-bold pb-8 ">
              About My Company
            </h1>
            <p>
              Welcome to flafkart.com, your number one source for all things you
              need in your daily life. We're dedicated to providing you the very
              best of products, with an emphasis on quality, customer service,
              and uniqueness. Founded in 2021, flafkart has come a long way from
              its beginnings in Delhi. When we first started out, our passion
              for [specific motivation or product category, e.g., "eco-friendly
              and high-quality household products"] drove us to start our own
              business.
              <br />
              Our mission is to bring you the best products from around the
              world, all in one place, while providing exceptional customer
              service. We strive to be the go-to online destination for a wide
              range of categories including electronics, fashion, home
              essentials, beauty products, and more. We believe in delivering
              not just products, but also a shopping experience that is seamless
              and enjoyable.
            </p>
          </div>
          <div className="my-8 lg:mt-14">
            <h1 className="my-4 lg:my-10 text-2xl text-gray-600 font-bold underline">
              Our Values :
            </h1>
            <p>
              * Customer Centricity: We put our customers at the heart of
              everything we do. Your satisfaction is our priority, and we work
              tirelessly to exceed your expectations. <br />
              * Quality: We offer products that meet high standards of quality
              and durability, ensuring that you get the best value for your
              money. <br />
              * Innovation: We are constantly on the lookout for innovative
              products that can enhance your lifestyle and simplify your daily
              routines. <br />* Sustainability: We are committed to sustainable
              practices and offer a range of eco-friendly products to support a
              healthier planet.
            </p>
          </div>
          <div className="my-8 lg:mt-14">
            <h1 className="my-4 lg:my-10 text-2xl text-gray-600 font-bold underline">
              Our Promise :
            </h1>
            <p>
              * Wide Selection: A vast array of products to meet all your needs,
              from the latest gadgets to everyday essentials. <br />
              * Best Prices: Competitive pricing on all our products, ensuring
              that you get the best deals. <br />
              * Reliable Delivery: Fast and reliable delivery service, bringing
              your purchases to your doorstep promptly. <br />* Customer
              Support: Exceptional customer service available to assist you at
              every step of your shopping journey
            </p>
          </div>
        </div>
      </div>

      <div className="ourwork lg:py-10 py-5 ">
        <div className="text-center text-3xl lg:text-5xl text-gray-600 font-bold">
          <h1 className="underline text-blue-900 pb-10">Our Works.</h1>
        </div>
        <section className="grid lg:grid-cols-4 text-center py-5">
          <div className="p-3">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              {Conunter && (
                <CountUp
                  className="text-5xl text-white font-bold"
                  start={0}
                  end={1000}
                  duration={3}
                  suffix="+"
                />
              )}
            </ScrollTrigger>
            <h3 className="text-xl text-white font-semibold">happy Clients</h3>
          </div>
          <div className="p-3">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              {Conunter && (
                <CountUp
                  className="text-5xl text-white font-bold"
                  start={0}
                  end={5}
                  duration={3}
                  suffix="+"
                />
              )}
            </ScrollTrigger>
            <h3 className="text-xl text-white font-semibold">Completed Years</h3>
          </div>
          <div className="p-3">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              {Conunter && (
                <CountUp
                  className="text-5xl text-white font-bold"
                  start={0}
                  end={86}
                  duration={3}
                  suffix="+"
                />
              )}
            </ScrollTrigger>
            <h3 className="text-xl text-white font-semibold">Our Products</h3>
          </div>
          <div className="p-3">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              {Conunter && (
                <CountUp
                  className="text-5xl text-white font-bold"
                  start={0}
                  end={13}
                  duration={3}
                  suffix="+"
                />
              )}
            </ScrollTrigger>
            <h3 className="text-xl text-white font-semibold">Deleviry State</h3>
          </div>
        </section>

      </div>

      <div>
        <div className="text-center lg:py-14 py-5 text-3xl lg:text-5xl text-blue-900 font-bold">
          <h1>Our company history and facts</h1>
        </div>
        <div className="lg:w-[90%] mx-auto p-5 grid lg:grid-cols-2">
          <div  className="p-4 hover:-translate-y-2 transition-all cursor-pointer">
            <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <div className="py-5">
            <h1 className="text-3xl pb-4 font-semibold text-blue-900">Our company history and facts</h1>
            <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
            </div>
          </div>
          <div  className="p-4 hover:-translate-y-2 transition-all cursor-pointer">
            <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <div className="py-5">
            <h1 className="text-3xl pb-4 font-semibold text-blue-900">Design & development process demonstration</h1>
            <p>A wonderful serenity has taken possession of my entire soul,like these sweet mornings of spring which I enjoy with my whole heart.</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
