import Image from "next/image";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center py-10">
      <section className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center text-center md:text-left space-y-10 md:space-y-0">
        {/* Content Section */}
        <div className="space-y-6 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I&#39;m Abdullah Ateeq 👋</h1>
          <p className="text-lg">
            I am a front-end developer skilled in HTML5, CSS3, Bootstrap, and
            Tailwind CSS. I enjoy building clean, responsive, and user-friendly
            websites that work well on all devices. I also use Figma to design
            modern and intuitive UI layouts before turning them into functional
            websites.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center sm:justify-start font-bold text-lg">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Karachi, Pakistan
          </div>

          {/* Status */}
          <div className="flex justify-center sm:justify-start space-x-4 text-lg pt-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="status-text">Available for new project</div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-6 text-xl pt-5">
            <a href="https://github.com/asharibkhan333" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github hover:text-gray-300 transition-transform duration-300"></i>
            </a>
            <a href="https://www.linkedin.com/in/asharib-khan-1a963a353" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin hover:text-gray-300 transition-transform duration-300"></i>
            </a>
            <a href="https://x.com/asharikhan123?t=9BQ1yl5gluHxcsyO4OWg5A&s=09" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter hover:text-gray-300 transition-transform duration-300"></i>
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="relative w-48 h-52 sm:w-60 sm:h-64 md:w-72 md:h-80 mx-auto mt-10 md:mt-0">
          <div className="absolute top-4 left-4 w-[200px] h-[200px] bg-gray-700 rounded-md z-0 mt-10">
          </div>
          <div className="relative z-10">
            <Image
              src="/mainportPic.png" // Change this to your image
              alt="Profile"
              width={200}
              height={200}
              className="object-cover rounded-md mt-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
