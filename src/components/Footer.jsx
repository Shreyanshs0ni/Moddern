import { FaDiscord, FaFacebook, FaGithub, FaTwitch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://x.com", icon: <FaX /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Shrey 2024. All rights reserved{" "}
        </p>
        <div className="md:jus flex justify-center gap-4">
          {links.map((item) => (
            <a
              key={item}
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
