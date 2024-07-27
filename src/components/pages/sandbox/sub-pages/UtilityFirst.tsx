import React from "react";
import "./utility-first.css";
import WarningSVG from "../../../../assets/img/warning.svg";

const UtilityFirst: React.FC = () => {
  return (
    <>
      {/* <!-- HTML/CSS Version --> */}
      <div className="alert">
        <div className="alert-logo-wrap">
          <img className="alert-logo" src={WarningSVG} alt="alert" />
        </div>
        <div className="alert-body">
          <h4 className="alert-title">Are You Sure?</h4>
          <p className="alert-message">You are about to delete a post</p>
        </div>
      </div>

      {/* <!-- Tailwind Version --> */}
      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
        <img src={WarningSVG} alt="alert" className="size-12" />
        <div>
          <div className="text-xl font-medium text-black">Are You Sure?</div>
          <p className="text-slate-500">You are about to delete a post</p>
        </div>
      </div>
    </>
  );
};

export default UtilityFirst;

// <!--
//   - We didn't have to write any extra CSS
//   - No spending time on class names
//   - No worrying about our CSS file getting too large
//   - Add and change things on the fly, try different layouts, etc
//   - Less chance of stuff going wrong
// -->
