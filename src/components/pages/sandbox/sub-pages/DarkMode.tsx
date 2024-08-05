import React, { useEffect, useState } from "react";

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          placeat earum a exercitationem? Minima corrupti ad magni aut suscipit
          nulla voluptatem atque vitae fugit at.
        </p>
      </div>

      <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isDarkMode}
          onChange={handleToggleChange}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </>
  );
};

export default DarkMode;

// <!-- Credit for toggle button style
// https://tailwindcomponents.com/component/toggle-switch
//  -->
