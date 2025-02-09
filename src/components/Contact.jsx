import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1 animate-pulse"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-1 lg:translate-y-40 translate-y-60 animate-pulse"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125 animate-pulse "
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125  "
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Moddern</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] mix-blend-difference md:text-[6rem]">
            Let&apos;s b<b>u</b>ild the
            <br /> ne<b>w</b> era of <br />
            gaming toget<b>h</b>er
          </p>
          <Button
            title="contact us"
            containerClass="bg-white text-orange-600 mt-10 transition-color duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
