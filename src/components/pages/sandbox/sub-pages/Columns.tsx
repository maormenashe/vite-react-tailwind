import React from "react";
import ImageOne from "../../../../assets/img/img1.jpg";
import ImageTwo from "../../../../assets/img/img2.jpg";
import ImageThree from "../../../../assets/img/img3.jpg";
import ImageFour from "../../../../assets/img/img4.jpg";
import ImageFive from "../../../../assets/img/img5.jpg";
import ImageSix from "../../../../assets/img/img6.jpg";
import ImageSeven from "../../../../assets/img/img7.jpg";
import ImageEight from "../../../../assets/img/img8.jpg";
import ImageNine from "../../../../assets/img/img9.jpg";

const Columns: React.FC = () => {
  return (
    <>
      <div className="columns-2 gap-8">
        <img className="w-full" src={ImageOne} />
        <img className="w-full" src={ImageTwo} />
        <img className="w-full break-after-column" src={ImageThree} />
        <img className="w-full" src={ImageFour} />
      </div>
      <div className="columns-3 gap-24">
        <img className="w-full" src={ImageThree} />
        <img className="w-full break-before-column" src={ImageFour} />
        <img className="w-full" src={ImageFive} />
        <img className="w-full" src={ImageSix} />
        <img className="w-full" src={ImageSeven} />
      </div>
      <div className="columns-3xs">
        {/* <!-- Video Aspect Ratio --> */}
        <img className="w-full aspect-video" src={ImageEight} />
        {/* <!-- Square Aspect Ratio --> */}
        <img className="w-full aspect-square" src={ImageNine} />
        <img className="w-full break" src={ImageOne} />
        <img className="w-full" src={ImageTwo} />
      </div>
    </>
  );
};

export default Columns;

// <!-- Column Classes
// columns-1	      columns: 1;
// columns-2	      columns: 2;
// columns-3	      columns: 3;
// columns-4	      columns: 4;
// columns-5	      columns: 5;
// columns-6	      columns: 6;
// columns-7	      columns: 7;
// columns-8	      columns: 8;
// columns-9	      columns: 9;
// columns-10	    columns: 10;
// columns-11	    columns: 11;
// columns-12	    columns: 12;
// columns-auto	  columns: auto;
// columns-3xs	    columns: 16rem; /* 256px */
// columns-2xs	    columns: 18rem; /* 288px */
// columns-xs	    columns: 20rem; /* 320px */
// columns-sm	    columns: 24rem; /* 384px */
// columns-md	    columns: 28rem; /* 448px */
// columns-lg	    columns: 32rem; /* 512px */
// columns-xl	    columns: 36rem; /* 576px */
// columns-2xl	    columns: 42rem; /* 672px */
// columns-3xl	    columns: 48rem; /* 768px */
// columns-4xl	    columns: 56rem; /* 896px */
// columns-5xl	    columns: 64rem; /* 1024px */
// columns-6xl	    columns: 72rem; /* 1152px */
// columns-7xl	    columns: 80rem; /* 1280px */
// -->

// <!-- Break After
//   break-after-auto	break-after: auto;
//   break-after-avoid	break-after: avoid;
//   break-after-all	break-after: all;
//   break-after-avoid-page	break-after: avoid-page;
//   break-after-page	break-after: page;
//   break-after-left	break-after: left;
//   break-after-right	break-after: right;
//   break-after-column	break-after: column;
// -->

// <!-- Break Before
//   reak-before-auto	break-before: auto;
//   break-before-avoid	break-before: avoid;
//   break-before-all	break-before: all;
//   break-before-avoid-page	break-before: avoid-page;
//   break-before-page	break-before: page;
//   break-before-left	break-before: left;
//   break-before-right	break-before: right;
//   break-before-column	break-before: column;
// -->
