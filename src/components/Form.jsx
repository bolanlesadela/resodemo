import Section from "./Section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Button from "./Button";
import { BottomLine } from "./design/Hero";

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const element = formRef.current;

    gsap.fromTo(
      element,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 50%", // starts when form enters viewport
          toggleActions: "play none none none", // play only once
        },
      }
    );
  }, []);

  return (
    <Section id="bookademo">
      <section className=" py-12 px-6 md:px-12 lg:px-24">
        <div ref={formRef} className="max-w-3xl mx-auto shadow-2xl shadow-black-900 p-8 md:p-12">
          <Heading
            title="This Could Be Your University In One Click"
            text={
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Position / Role */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    Position / Role
                  </label>
                  <input
                    type="text"
                    placeholder="Dean, DSA, Admin Officer, etc."
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* University Name */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    University Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your university name"
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Official Email */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    Official Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your official email"
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Message / Notes */}
                <div>
                  <label className="block text-sm font-medium text-left mb-2">
                    Message / Notes
                  </label>
                  <textarea
                    placeholder="Tell us what you need or expect..., or how can we help you?"
                    rows="4"
                    className="w-full rounded-lg border border-gray-300 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <Button href="submit">
                        Submit
                    </Button>
                </div>
              </form>
            }
          />
        </div>
      </section>
    </Section>
  );
};

export default Form;
