import { curve } from "../assets";
import Section from "./Section";
import Button from "./Button";
// import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BottomLine } from "./design/Hero";

// import { Paralla, ParallaxLayer } from "@react-spring/parallax";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll(".stagger-item");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 60 }, // start state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3, // delay between each element
      }
    );
  }, []);

  return (
    <Section
      className="pt-[10rem] lg:pt-[12rem]  -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="hero"
    >
      <div className="container relative">
        <div
          className="z-1 max-w-[62rem] mx-auto text-center
             "
          ref={heroRef}
        >
          <h1 className="h1 mb-6 stagger-item">
            End campus chaos. Start clarity with{" "}
            <span className="relative inline-block">
              {" "}
              Resobridge
              <img
                src={curve}
                className="absolute top-full left-0 w-full"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="stagger-item body-1 text-[15px] max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Universities shouldn’t run on lost files, delays, and frustration.
            Resobridge is the fast lane for student complaints, staff workflows,
            and admin oversight.
          </p>

          <div>       
            <Button href="#howitworks" className="m-5 stagger-item" white>
              See How It Works
            </Button>
            <Button href="#bookademo" className="m-5 stagger-item">
              Book A Demo
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
