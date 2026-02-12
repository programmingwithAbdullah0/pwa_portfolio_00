import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <>
      <div id="icons" className="box relative  flex justify-between items-center  lg:w-[90%] md:w-[100%] w-[90%] lg:p-4 p-6  shadow-lg 
            bottom-0 mx-auto z-10 lg:-mt-6 -mt-10 sm:border sm:border-gray-300 sm:bg-transparent  rounded-full md:rounded-l-full">
        <a href="https://www.facebook.com/abdullah.ateeq.146/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        </a>
        <a href="https://github.com/programmingwithAbdullah0/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        </a>
        <a href="https://www.instagram.com/itx_.abdullah._khan_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        </a>
        <a href="https://www.linkedin.com/in/AbdullahAteeq/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        </a>
        <a href="https://wa.me/923362310043" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        </a>

      </div>
    </>
  );
}