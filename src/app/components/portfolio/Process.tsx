import React from 'react'

export default function Process() {
  const steps = [
  {
    number: "01",
    title: "Submit Request",
    description: "Share your video needs and project details to get started.",
  },
  {
    number: "02",
    title: "Video Editing",
    description: "Our team edits and you can request revisions to perfect it.",
  },
  {
    number: "03",
    title: "Final Delivery",
    description: "Receive the final video with all necessary adjustments.",
  },
];
  return (
    <section id="process" className="">
      <div className="container">
        {/* Top: two YouTube embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:mb-20 w-full lg:w-2/3 m-auto">
          <div className="w-full rounded-xl overflow-hidden bg-black">
            <iframe
              className="w-full h-64 md:h-56"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="w-full rounded-xl overflow-hidden bg-black">
            <iframe
              className="w-full h-64 md:h-56"
              src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom: image left, text steps right */}
        <div className="flex flex-col lg:flex-row gap-10 items-start ">
          <div className='w-full lg:w-1/2'>
            <img
              src="/images/process.avif"
              alt="editor at work"
              className="w-full rounded-2xl object-cover h-[420px]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
              <span className="text-sm text-gray-300">Process</span>
            </div>

            <h3 className="text-3xl font-semibold text-white mb-6">How our video editing <br />service works for you</h3>

               <ol className="space-y-6 text-gray-300 mt-20">
                   {steps.map((step) => (
                     <li key={step.number} className="flex gap-6 items-start">
                       <div className="text-xl font-bold">{step.number}</div>
                       <div>
                         <div className="font-medium">{step.title}</div>
                         <div className="text-sm text-gray-400">{step.description}</div>
                       </div>
                     </li>
                   ))}
                 </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
