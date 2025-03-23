const ContactForm = () => {
  return (
    <form className="fieldset grid lg:grid-cols-2 gap-4">
      <div>
        <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          First Name
        </label>
        <input
          type="text"
          className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32] bg-gray-800 text-white"
          placeholder="First Name"
        />
      </div>

      <div>
        <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          Last Name
        </label>
        <input
          type="text"
          className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32] bg-gray-800 text-white"
          placeholder="Last Name"
        />
      </div>
      <div className="lg:col-span-2">
        <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          Email <span className="text-rose-600">*</span>
        </label>
        <input
          type="email"
          className="input xl:input-xl lg:input-lg md:input-md input-sm w-full focus:bg-[#102E32]  bg-gray-800 text-white"
          placeholder="Email Address"
        />
      </div>

      <div className="lg:col-span-2">
        <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          Subject
        </label>
        <input
          type="text"
          className="input xl:input-xl lg:input-lg md:input-md input-sm w-full  bg-gray-800 focus:bg-[#102E32] text-white"
          placeholder="Subject"
        />
      </div>
      <div className="lg:col-span-2">
        <label className="fieldset-label text-white mb-4 lg:text-2xl md:text-2xl sm:text-xl text-lg">
          Your Message <span className="text-rose-600">*</span>
        </label>
        <input
          type="text"
          className="textarea xl:textarea-xl lg:textarea-lg md:textarea-md textarea-sm w-full focus:bg-[#102E32]  pb-24  bg-gray-800 text-white"
          placeholder="Your Message"
        />
      </div>
      <button className="btn bg-blue-700 border-blue-700 hover:bg-green-700 hover:border-green-700 shadow-none mt-4  text-white">
        Submit Form
      </button>
    </form>
  );
};

export default ContactForm;
