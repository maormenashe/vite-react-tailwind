import React, { useEffect, useState } from "react";

const BreakpointMediaQueries: React.FC = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta harum
        iure nulla, laboriosam doloremque porro voluptatum adipisci nobis veniam
        voluptatibus nemo officia tempora placeat nesciunt labore illo vitae
        esse a excepturi nam suscipit nostrum alias incidunt. Eius a laborum
        modi dicta harum quaerat sed explicabo neque? Enim odio numquam quas,
        placeat mollitia corporis eum fugiat atque labore maiores autem nostrum
        porro praesentium minima, ipsa libero consectetur alias id magnam
        repellendus quibusdam beatae aliquam harum nisi? Distinctio doloremque
        dignissimos nemo aliquam tenetur eveniet quod cumque odio soluta, ipsam
        sit consequuntur est totam quaerat cupiditate quibusdam eligendi maiores
        impedit harum, molestiae animi.
        <h1 className="text-white text-xl md:text-3xl xl:text-5xl">
          Width: {windowSize.width}px
        </h1>
      </div>
    </>
  );
};

export default BreakpointMediaQueries;

// <!-- Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
//   -->
