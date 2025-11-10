import React from "react";
import { Heading } from "../Heading";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="">

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <Heading variant="h5" heading={"● Contact"} />
        </div>

        <div className="flex justify-center mb-10">
          <Heading heading={(<>Contact us for amazing video <br /> editing projects</>)} />
        </div>
        <form className="space-y-6" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-white">Full Name</label>
              <input
                type="text"
                placeholder="James smith"
                className="bg-white/5 rounded-lg px-4 py-3 text-sm w-full text-white placeholder:text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white">Email</label>
              <input
                type="email"
                placeholder="jamesmith@gmail.com"
                className="bg-white/5 rounded-lg px-4 py-3 text-sm w-full text-white placeholder:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-white">What Kind of Video Do You Need?</label>
            <select className="bg-white/5 rounded-lg px-4 py-3 w-full text-white text-sm">
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
            <textarea className="w-full bg-white/5 text-white placeholder:text-white rounded-lg p-4 h-40 text-sm" placeholder="Describe your project..." />
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
