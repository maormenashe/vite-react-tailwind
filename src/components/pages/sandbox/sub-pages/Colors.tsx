import React from "react";

const Colors: React.FC = () => {
  return (
    <>
      {/* <!-- Default colors -->
    <!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  --> */}
      {/* <!-- Text Colors --> */}
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-red-50">Tailwind is awesome</p>
      <p className="text-red-100">Tailwind is awesome</p>
      <p className="text-red-200">Tailwind is awesome</p>
      <p className="text-red-300">Tailwind is awesome</p>
      <p className="text-red-400">Tailwind is awesome</p>
      <p className="text-red-500">Tailwind is awesome</p>
      <p className="text-red-600">Tailwind is awesome</p>
      <p className="text-red-700">Tailwind is awesome</p>
      <p className="text-red-800">Tailwind is awesome</p>
      <p className="text-red-900">Tailwind is awesome</p>
      <p className="text-green-500">Tailwind is awesome</p>
      <p className="text-emerald-500">Tailwind is awesome</p>
      <p className="text-zinc-500">Tailwind is awesome</p>
      <p className="text-slate-500">Tailwind is awesome</p>
      {/* <!-- Background Colors --> */}
      <div className="bg-slate-600">
        <p className="text-white">Tailwind is awesome</p>
      </div>
      <div className="bg-zinc-400">
        <p className="text-white">Tailwind is awesome</p>
      </div>
      <div className="bg-emerald-600">
        <p className="text-white">Tailwind is awesome</p>
      </div>
      {/* <!-- Text Underline --> */}
      <p className="underline text-red-700 decoration-red-700">
        Tailwind is awesome
      </p>
      <p className="underline text-blue-700 decoration-blue-700">
        Tailwind is awesome
      </p>
      {/* <!-- Border Colors --> */}
      <input className="border-2 border-rose-500" />
      <input className="border-2 border-blue-300" />
      <input className="border-2 border-purple-900" />
      <input className="border-2 border-yellow-500" />
      {/* <!-- Divide Colors --> */}
      <div className="divide-y divide-blue-200">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </div>
      {/* <!-- Outline Colors --> */}
      <button className="outline outline-blue-500">Subscribe</button>
      <button className="outline outline-purple-300">Subscribe</button>
      <button className="outline outline-gray-500">Subscribe</button>
      {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you cans set it)--> */}
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500">
        Subscribe
      </button>
      <button className="bg-blue-500 shadow-lg shadow-blue-500/50">
        Subscribe
      </button>
      <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50">
        Subscribe
      </button>
      {/* <!-- Accent Colors --> */}
      <input type="checkbox" className="accent-purple-500" checked /> Option 1
      <input type="checkbox" className="accent-pink-500" checked /> Option 2
      <input type="checkbox" className="accent-red-300" checked /> Option 3
      {/* <!-- Arbitrary Colors --> */}
      <div className="bg-[#427fab] h-10">Hello</div>
      <div className="text-[#427fab] h-10">Hello</div>
      <div className="border border-[#427fab] h-10">Hello</div>
    </>
  );
};

export default Colors;
