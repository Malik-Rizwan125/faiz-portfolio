import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
            <span className="text-sm text-gray-300">Contact</span>
          </div>
       <div className="w-full lg:w-[50%] flex justify-center m-auto"><h2 className="text-4xl font-semibold text-white">Contact us for amazing video editing projects</h2></div>   
        </div>

        <form className="max-w-4xl mx-auto space-y-6" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-white/5 rounded-lg px-4 py-3 text-sm w-full placeholder:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/5 rounded-lg px-4 py-3 text-sm w-full placeholder:text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-white">What Kind of Video Do You Need?</label>
            <select className="bg-white/5 rounded-lg px-4 py-3 w-full text-sm">
              <option>Select...</option>
              <option>Social Ads</option>
              <option>Explainer</option>
              <option>Editing Only</option>
            </select>
          </div>

          <div>
            <div className="mb-2 font-semibold text-gray-200">What's Your Budget Range?</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="budget" defaultChecked />
                <span className="ml-1 text-white">Under $500</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="budget" />
                <span className="ml-1 text-white">$500-$1000</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="budget" />
                <span className="ml-1 text-white">$1000-$2000</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="budget" />
                <span className="ml-1 text-white">$2000-$5000</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Share Your Vision</label>
            <textarea className="w-full bg-white/5 placeholder:text-white rounded-lg p-4 h-40 text-sm" placeholder="Describe your project..." />
          </div>

          <div>
            <button type="submit" className="w-full bg-white/5 text-white rounded-lg py-3 font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
