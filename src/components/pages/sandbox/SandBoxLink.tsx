import React from "react";
import { Link } from "react-router-dom";

interface SandBoxLinkProps {
  text: string;
  to: string;
}

const SandBoxLink: React.FC<SandBoxLinkProps> = ({ text, to }) => {
  return (
    <>
      <li className="text-lg border text-center border-blue-200 p-2 my-4">
        <Link className="text-blue-500 hover:text-blue-300" to={to}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default SandBoxLink;
