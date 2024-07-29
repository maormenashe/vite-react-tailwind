import React from "react";
import ImageOne from "../../../../assets/img/img1.jpg";
import ImageTwo from "../../../../assets/img/img2.jpg";
import ImageThree from "../../../../assets/img/img3.jpg";
import ImageFour from "../../../../assets/img/img4.jpg";

const Filters: React.FC = () => {
  return (
    <>
      {/* <!-- Blur --> */}
      <div className="blur-none">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        deserunt animi quas aliquam consectetur ut obcaecati voluptas
        repudiandae odit harum?
      </div>
      <div className="blur-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        deserunt animi quas aliquam consectetur ut obcaecati voluptas
        repudiandae odit harum?
      </div>
      <div className="blur-lg">
        <img className="w-48" src={ImageOne} alt="" />
      </div>
      <div className="blur-2xl">
        <img className="w-48" src={ImageOne} alt="" />
      </div>

      {/* <!-- Brightness --> */}
      <div className="brightness-50">
        <img className="w-48" src={ImageTwo} alt="" />
      </div>
      <div className="brightness-100">
        <img className="w-48" src={ImageTwo} alt="" />
      </div>
      <div className="brightness-150">
        <img className="w-48" src={ImageTwo} alt="" />
      </div>
      <div className="brightness-200">
        <img className="w-48" src={ImageTwo} alt="" />
      </div>

      {/* <!-- Contrast --> */}
      <div className="contrast-50">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="contrast-100">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="contrast-150">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="contrast-200">
        <img className="w-48" src={ImageThree} alt="" />
      </div>

      {/* <!-- Grayscale --> */}
      <div className="grayscale">
        <img className="w-48" src={ImageThree} alt="" />
      </div>

      {/* <!-- Invert --> */}
      <div className="invert">
        <img className="w-48" src={ImageThree} alt="" />
      </div>

      {/* <!-- Sepia --> */}
      <div className="sepia">
        <img className="w-48" src={ImageThree} alt="" />
      </div>

      {/* <!-- Hue Rotate --> */}
      <div className="hue-rotate-15">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="hue-rotate-90">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="hue-rotate-180">
        <img className="w-48" src={ImageThree} alt="" />
      </div>
      <div className="hue-rotate-60">
        <img className="w-48" src={ImageThree} alt="" />
      </div>

      {/* <!-- Saturate --> */}
      <div className="saturate-50">
        <img className="w-48" src={ImageFour} alt="" />
      </div>
      <div className="saturate-100">
        <img className="w-48" src={ImageFour} alt="" />
      </div>
      <div className="saturate-150">
        <img className="w-48" src={ImageFour} alt="" />
      </div>
      <div className="saturate-200">
        <img className="w-48" src={ImageFour} alt="" />
      </div>
    </>
  );
};

export default Filters;

// <!-- Blur
//   blur-none	    filter: blur(0);
//   blur-sm	      filter: blur(4px);
//   blur	        filter: blur(8px);
//   blur-md	      filter: blur(12px);
//   blur-lg	      filter: blur(16px);
//   blur-xl	      filter: blur(24px);
//   blur-2xl	    filter: blur(40px);
//   blur-3xl	    filter: blur(64px);
// -->

// <!-- Brightness
//   brightness-0	    filter: brightness(0);
//   brightness-50	    filter: brightness(.5);
//   brightness-75	    filter: brightness(.75);
//   brightness-90	    filter: brightness(.9);
//   brightness-95	    filter: brightness(.95);
//   brightness-100	  filter: brightness(1);
//   brightness-105	  filter: brightness(1.05);
//   brightness-110	  filter: brightness(1.1);
//   brightness-125	  filter: brightness(1.25);
//   brightness-150	  filter: brightness(1.5);
//   brightness-200	  filter: brightness(2);
// -->

// <!-- Contrast
//   contrast-0	  filter: contrast(0);
//   contrast-50	  filter: contrast(.5);
//   contrast-75	  filter: contrast(.75);
//   contrast-100	filter: contrast(1);
//   contrast-125	filter: contrast(1.25);
//   contrast-150	filter: contrast(1.5);
//   contrast-200	filter: contrast(2);
// -->

// <!-- Hue Rotate
//   hue-rotate-0	    filter: hue-rotate(0deg);
//   hue-rotate-15	    filter: hue-rotate(15deg);
//   hue-rotate-30	    filter: hue-rotate(30deg);
//   hue-rotate-60	    filter: hue-rotate(60deg);
//   hue-rotate-90	    filter: hue-rotate(90deg);
//   hue-rotate-180	  filter: hue-rotate(180deg);
// -->
