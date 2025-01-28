import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <div className="fixed bottom-0 z-10 bg-gradient-to-r from-orange-400 to-green-500 w-full p-4 md:px-10 lg:px-28 xl:px-48">
      <div className="flex justify-center items-center gap-4">
        <a href="#">
          <FaGithub className="text-white" size={20} />
        </a>
        <a href="#">
          <FaLinkedinIn className="text-white" size={20} />
        </a>
        <a href="#">
          <FaFacebook className="text-white" size={20} />
        </a>
      </div>
      <p className="text-white text-center mt-2">
        Copyright &copy; <span className="year">{year}</span>&#160; Sweet Meal
        &#160;
      </p>
    </div>
  );
};

export default Footer;
