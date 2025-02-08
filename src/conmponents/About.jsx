import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAmimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAmimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Moddern
        </h2>
        <AnimatedTitle />
        <div className="about-subtext">
          <p> The Game of Games Begins-your life, now an epic</p>
          <p>Moddern unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dscreen" id="clip">
        <div className="mask-clip-path about-image relative">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
            style={{ marginTop: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
