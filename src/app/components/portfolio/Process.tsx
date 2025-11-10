import React from 'react'
import { Heading } from '../Heading';

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
      <div className="container !px-0">
        {/* Bottom: image left, text steps right */}
        <div className="flex flex-col lg:flex-row gap-10 items-start ">
          <div className='w-full lg:w-1/2'>
            <img
              src="/images/process.jpg"
              alt="editor at work"
              className="w-full rounded-2xl object-cover h-[420px]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3.5">
              <Heading variant="h5" heading={"● Process"} />
            </div>


            <div className="flex justify-center mb-10">
              <Heading heading={(<>How our video editing <br />service works for you</>)} />
            </div>
            <ol className="space-y-6 text-gray-300 mt-5">
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
