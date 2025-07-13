
const Contact = () => {
  return (
    <section className="bg-[#0f172a] text-slate-200 pb-10 text-center" id="contact">
      <div className="pt-10 bg-[#0f172a]">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">
          Get in touch
        </h1>
        <p className="text-slate-300 italic pt-4 pb-10">
          What &#39;s next? Feel free to reach out to me if you &#39;re looking for <br />
          a developer, have a query, or simply want to connect.
        </p>
      </div>

      {/* Email section */}
      <div className="flex justify-center gap-4 items-center">
        <i className="fa-solid fa-envelope text-[20px]"></i>
        <span className="text-1xl text-slate-300">abdullahateeq331@gmail.com</span>
      </div>

      {/* Phone section */}
      <div className="flex justify-center gap-4 items-center mt-4">
        <i className="fa-solid fa-phone text-[20px]"></i>
        <span className="text-1xl text-slate-300">03362310043</span>
      </div>

      {/* Platforms contact */}
      <div className="italic text-slate-400 mt-8 text-1xl font-semibold">
        <p>You may also find me on these platforms!</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 text-white text-xl pt-3">
        <a
          className="hover:scale-105 transition-transform duration-300"
          href="https://github.com/asharibkhan333"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          className="hover:scale-105 transition-transform duration-300"
          href="https://www.linkedin.com/in/asharib-khan-1a963a353"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          className="hover:scale-105 transition-transform duration-300"
          href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=qp451he"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
