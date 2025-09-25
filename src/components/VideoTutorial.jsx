import Section from "./Section";
import Heading from "./Heading";
import staffvideo from "../assets/video/staffvideo.mp4";
import Subheading from "./Subheading";

const VideoTutorial = () => {
  return (
    <Section id="tutorialvideo">
      <Heading
        title="See Resobridge In Action"
        className="md:max-w-md lg:max-w-2xl"
      />

      <div className="container relative max-w-3xl mx-auto overflow-hidden">
        <video
          className="w-full rounded-2xl max-w-3xl mb-[10rem]"
          src={staffvideo}
          controls
        />
      </div>
      <div className="container">
        <Subheading
          title="Who We Are"
          text={
            <div>
              <p className="mt-9 text-lg mb-6 sm:text-xl">
                We’re not outsiders looking in — we’re students and engineers
                who lived the frustration first-hand. That’s why we built
                Resobridge.
              </p>
              <p className="text-lg sm:text-xl">
                Our mission is simple:{" "}
                <span className="font-semibold">
                  Students get heard, Staff get efficient, Admins get clarity.
                </span>{" "}
                One platform to unite the entire campus.
              </p>
            </div>
          }
        />
      </div>
    </Section>
  );
};

export default VideoTutorial;
